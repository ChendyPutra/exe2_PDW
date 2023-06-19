
    function uploaddata() {
        var nama = document.getElementById("nama").value;
        var tanggal = document.getElementById("tanggal").value;
        var jumlahTiket = document.querySelector("select[name='jumlah tiket']").value;
        var kategori = document.querySelector("input[name='kategori']:checked").nextSibling.nextSibling.textContent.trim();

        alert(
            "Data Berhasil di Upload" +
            "\nNama             : " + nama  +
            "\nTanggal          : " + tanggal +
            "\nJumlah Tiket   : " + jumlahTiket + 
            "\nKategori         : " + kategori 

        )
                          
    }

