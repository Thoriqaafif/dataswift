const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th
                        key={index}
                        className="border border-accent-500 px-4 py-2 bg-accent-900"
                        colSpan={column == "Action" ? 2 : 1}
                    >
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
