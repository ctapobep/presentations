Comparison = function () {
    this.prototype.withRows = function (rows) {
        rows.forEach(function (row) {
            return "<div>" + row[0] + "</div>" + "<div>" + row[1] + "</div>" + "<div>" + row[2] + "</div>"
        })
    }
};
