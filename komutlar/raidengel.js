module.exports = {
name:"raid-engel",
code:`
$if[$message[1]==aç]
$channelSendMessage[$channelID;{description:⚙️ Raid engel açıldı \`$getServerVar[raidsayı]\`'dan fazla etiket atan banlanıcak!}{color:$getServerVar[hex]}{delete:5s}]
$setServerVar[raidengel;true]
$onlyIf[$getServerVar[raidengel]==false;⚠️ Raid engel zaten açılmış]
$endif
$if[$message[1]==kapat]
$channelSendMessage[$channelID;{description:⚙️ Raid engel kapatıldı}{color:$getServerVar[hex]}{delete:5s}]
$setServerVar[raidengel;false]
$onlyIf[$getServerVar[raidengel]==true;⚠️ Raid engel zaten kapatılmış]
$endif
$if[$message[1]==sayı]
$channelSendMessage[$channelID;{description:⚙️ Raid sayısı **$message[2]** olarak ayarlandı}{color:$getServerVar[hex]}{delete:5s}]
$setServerVar[raidsayı;$message[2]]
$onlyIf[$isNumber[$message[2]]==true;⚠️ Bir sayı gir]
$onlyIf[$message[2]!=;⚠️ Bir sayı gir]
$onlyIf[$getServerVar[raidengel]==true;⚠️ İlk önce raid engeli açmaya ne dersiniz?]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat;sayı]==true;**aç** , **kapat** veya **sayı** argumanlarını kullanın {delete:5s}]
$onlyPerms[admin;⚠️ Bunun için __YÖNETİCİ__ iznin olmalı]
`
}  
