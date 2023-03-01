function solve(input) {
    let students = JSON.parse(input);
    let keyNames = students[0];
    let HTMLTable = ['<table>'];

    HTMLTable.push(keyRow(keyNames));
    for(let value of students){
        HTMLTable.push(makeValueRow(value))
    }
    function keyRow(keyNames) {
        let res = [];
        let keys = Object.keys(keyNames);
        keys
            .forEach((key) =>
                res.push(`<th>${escapeHTML(key)}</th>`))
        return `<tr>${res.join('')}</tr>`
    }
    function makeValueRow(value) {
        let res = [];
        for(let i in value){
            res.push(`<td>${escapeHTML(value[i])}</td>`)
        }
        return `<tr>${res.join('')}</tr>`
    }
    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    HTMLTable.push('</table>')
    return (HTMLTable.join('\n'))
}



solve(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);


