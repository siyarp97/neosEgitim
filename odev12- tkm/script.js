
let sekillerPC = ['Taş', 'Kağıt', 'Makas']


let skorPC = 0
let skorUser = 0


while (true) {

    //Seçim yapsın
    let random = Math.round(Math.random() * (sekillerPC.length - 1))
    let secimPC = sekillerPC[random]

    console.log('Bilgisayarın Seçimi: ' + secimPC)


    // User seçimi 
    let secimUser = Number(prompt('1-Taş\n2-Kağıt\n3-Makas\n4-Çıkış'))


    //1 ve 4 aralığından başka seçim yaptırmama.
    if ((secimUser < 0) || (secimUser > 4)) {
        console.log('1 den 4 e kadar şık var sapık insan...\nTekrar seç!')
        continue 
    }

    else if (Number.isNaN(secimUser)) {
        console.log('Metinsel kabul görmüyor knk sayılardan birini seç.')
        continue
    }


    //  İhtimaller

    if ((secimUser == 1 && secimPC == sekillerPC[2]) ||
        (secimUser == 2 && secimPC == sekillerPC[0]) ||
        (secimUser == 3) && secimPC == sekillerPC[1]
    ) {

        skorUser++


        console.log('Kazanan : Oyuncu!')

    }


    else if ((secimUser == 1 && secimPC == sekillerPC[1]) ||
        (secimUser == 2 && secimPC == sekillerPC[2]) ||
        (secimUser == 3) && secimPC == sekillerPC[0]
    ) {
        skorPC++


        console.log('Kazanan : Bilgisayar!')
    }


    else if (secimUser == 4) {
        console.log('Çıkış yapıldı.')
        break
    }


    else {
        console.log('Berabere')
    }

    //İlk 3 olan kazansın.

    
    console.log(`Bilgisayarın Skoru :${skorPC}\n Oyuncunun Skoru : ${skorUser}`,)

    
    if ((skorPC || skorUser) == 3) {
        console.log('Oyun Bitti.')
    
        if (skorUser < skorPC) {
            console.log('Bilgisayar kazandı.')
        }
    
        else if (skorUser > skorPC) {
            console.log('Oyuncu kazandı.')
        }
    
        else {
            console.log('Berabere.')
        }
        
        break
    }



}