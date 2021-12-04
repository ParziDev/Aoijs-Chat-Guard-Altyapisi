module.exports = {
  name:"link-engel",
  code:`
 $if[$message[1]==aç]
 $channelSendMessage[$channelID;{description:⚙️ Link engel açıldı}{color:$getServerVar[hex]}{delete:7s}]
 $setServerVar[linkengel;true]
 $endif
 $if[$message[1]==kapat]
 $channelSendMessage[$channelID;{description:⚙️ Link engel kapatıldı}{color:$getServerVar[hex]}{delete:7s}]
 $setServerVar[linkengel;false]
 $onlyIf[$getServerVar[linkengel]==true;⚠️ Link engel zaten kapatılmış{delete:5s}]
 $endif
 $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;⚠️ **aç** veya **kapat** argumanlarını kullanın{delete:7s}]
 $onlyPerms[admin;⚠️ Bunun için __YÖNETİCİ__ iznin olmalı{delete:5s}]
 `
  }
