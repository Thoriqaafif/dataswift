<?php

namespace App\Http\Controllers;

use App\Models\Research;
use Illuminate\Http\Request;
use Inertia\Inertia;
use League\Csv\Reader;

class ResearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = auth()->id();
        
        // Get all researches
        $researches = Research::where('user_id', $userId)->get();

        // dd($researches);

        // Return the view with the researches
        return Inertia::render('Dashboard/Analisis/Index', [
            'researches' => $researches
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'title' => 'required',
            'file' => 'required|file|mimes:csv,xlsx',
        ]);

        // put file into storage
        $path = $request->file('file')->store('uploads');

        // Create a new research
        Research::create([
            'title' => $request->title,
            'file' => $path,
            'user_id' => $request->user()->id,
        ]);

        // // Redirect to the index page
        return redirect()->route('analisis');
    }

    /**
     * Display the specified resource.
     */
    public function show(Research $research)
    {
        $csv = Reader::createFromPath(storage_path('app/' . $research->file), 'r');
        $csv->setHeaderOffset(0); // First row as header
        $data = array_values(iterator_to_array($csv->getRecords()));
        $columns = $csv->getHeader();

        return Inertia::render('Dashboard/Analisis/Show', ['research' => ['title' => $research->title, 'columns' => $columns, 'data' => $data]]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Research $research)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Research $research)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Research $research)
    {
        //
    }
}
