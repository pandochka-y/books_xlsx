


const exportBookListXlsx = (data, query) => {

    const wb = {
        SheetNames: ["Books"],
        Sheets: {
            Books: {
                A1: { v: "№", t: "s", s: { alignment: {vertical: 'center', horizontal: 'center', } } },
                B1: { v: "Автор", t: "s", s: { alignment: {vertical: 'center', horizontal: 'center', } }, },
                B2: { v: "Имя", t: "s", s: { alignment: {vertical: 'center', horizontal: 'center', } } },
                C2: { v: "Фамилия", t: "s", s: { alignment: {vertical: 'center', horizontal: 'center', } } },
                D1: { v: "Название книги", t: "s", s: { alignment: {vertical: 'top', horizontal: 'center', } } },
                E1: { v: "Год публикации", t: "s", s: { alignment: {vertical: 'top', horizontal: 'center', } } },
            }
        }
    }

// STEP 2: Create data rows and styles
//     let row = [
//         { v: "№", t: "z", s: { alignment: {vertical: 'center', horizontal: 'center', } } },
//         { v: "Автор", t: "s", s: {}, },
//         { v: "Имя", t: "s", s: {} },
//         { v: "Фамилия", t: "s", s: {} },
//         { v: "Название книги", t: "s", s: {wrapText: true} },
//     ];

// STEP 3: Create worksheet with rows; Add worksheet to workbook
    const ws = wb.Sheets.Books

    const merge = [
        XLSX.utils.decode_range("A1:A2"),
        XLSX.utils.decode_range("B1:C1"),
        XLSX.utils.decode_range("D1:D2"),
        XLSX.utils.decode_range("E1:E2"),
    ];

    const colsWidth = [
        {wpx: 200},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
        {wpx: 100},
    ];

    const rowsHeight = [
        ,
        {hpx: 30, level: 1}
    ];

    ws["!merges"] = merge;
    ws["!cols"] = colsWidth;
    ws["!rows"] = rowsHeight;

    XLSX.utils.sheet_add_aoa(ws, data, {origin: 'A3', })

    const fileName = createFileName(query.query) || 'defaultName.xlsx'

// STEP 4: Write Excel file to browser
    XLSX.writeFile(wb, fileName);
}