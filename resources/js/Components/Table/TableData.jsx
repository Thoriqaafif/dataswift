const TableData = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <td
                    key={index}
                    className="border text-center border-accent-500 px-4 py-2"
                >
                    {item}
                </td>
            ))}
        </>
    );
};

export default TableData;
