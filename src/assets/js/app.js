function barra() {
    const menuIzquierdo = document.querySelector('.menu-izquierdo');

    menuIzquierdo.addEventListener('click', (e) => {
        const claseMenu = e.target.classList;

        // Selecciona el contenedor
        const contenedor = document.querySelector('.pagina'),
            flechaIzq = document.querySelector('.fa-arrow-left'),
            flechaDer = document.querySelector('.fa-arrow-right');

        if (claseMenu.contains('fa-arrow-left')) {
            // cerrar el menú lateral
            contenedor.classList.add('no-menu');
            e.target.style.display = 'none';
            flechaDer.style.display = 'block';
        } else if (claseMenu.contains('fa-arrow-right')) {
            contenedor.classList.remove('no-menu');
            e.target.style.display = 'none';
            flechaIzq.style.display = 'block';
        }
    });


    // $(document).ready(function() {

    //     var url = "test.xlsx";
    //     var oReq = new XMLHttpRequest();
    //     oReq.open("GET", url, true);
    //     oReq.responseType = "arraybuffer";

    //     oReq.onload = function(e) {
    //         var arraybuffer = oReq.response;

    //         /* convert data to binary string */
    //         var data = new Uint8Array(arraybuffer);
    //         var arr = new Array();
    //         for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //         var bstr = arr.join("");

    //         /* Call XLSX */
    //         var workbook = XLSX.read(bstr, { type: "binary" });

    //         /* DO SOMETHING WITH workbook HERE */
    //         var first_sheet_name = workbook.SheetNames[0];
    //         /* Get worksheet */
    //         var worksheet = workbook.Sheets[first_sheet_name];
    //         console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
    //     }

    //     oReq.send();

    // });

}