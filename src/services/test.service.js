import http from "../utils/http-common";
import authHeader from "./auth-header";
import TableExport from 'tableexport';

function create(data, username) {
    return http.post(`/test/create/${username}`, data)
}

function getByUser() {
    return http.get(`/test/get-user`, { headers: authHeader() })
}

function remove(id) {
    return http.delete(`/test/delete/${id}`, { headers: authHeader() })
}

function calculateResults(data) {
    return http.post(`/test/get-results`, data)
}

function createTable(answers, idTable) {
    const columnsNames = ['Alias', 'Edad', 'Sexo', 'Grado', 'Institucion', 'Locus', 'Interno', 'Externo', 'Fecha'];
    let table = document.createElement("table");
    table.setAttribute("id", idTable)
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr")
    for (let columnName of columnsNames) {
        let th = document.createElement("th");
        th.innerText = columnName;
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    const columnsNamesESP = ['alias', 'age', 'sex', 'grade', 'institution', 'locus', 'internal', 'external', 'createdAt'];

    for (let answer of answers) {
        let trBody = document.createElement("tr");
        for(let field of columnsNamesESP) {
            let td = document.createElement("td");
            td.innerText = answer[field];
            trBody.appendChild(td);
        }
        tbody.appendChild(trBody);
    }
    table.appendChild(tbody);
    return table;
}

function exportExcel(results) {
    const idTable = "tabla_locus";
    const table = createTable(results, idTable);
    let tableToExport = TableExport(table, {
        formats: ["xlsx"],
        filename: "resultados-locus",
        sheetname: "resultados",
        exportButtons: false 
    });
    var exportData = tableToExport.getExportData();
    var xlsxData = exportData[idTable].xlsx;
    tableToExport.export2file(xlsxData.data, xlsxData.mimeType, xlsxData.filename, xlsxData.fileExtension, xlsxData.merges, xlsxData.RTL, xlsxData.sheetname)
}

const methods = {
    create,
    getByUser,
    remove,
    calculateResults,
    exportExcel
}

export default methods;