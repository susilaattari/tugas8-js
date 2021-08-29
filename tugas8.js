function panggilObject(){
    const hewanMamalia = {
        namaHewan : ["kucing","Angsa","monyet","kambing"],
        warna :["putih","hitam","kuning"],
        umurHewan :["4 Tahun","2 tahun","1 tahun"],
    }
    hewanMamalia.namaHewan[1] ="sapi";
    hewanMamalia.makanan=["rumput","ikan","pisang"];
    console.log(hewanMamalia);
    console.log(hewanMamalia.namaHewan[1]);
}
panggilObject()