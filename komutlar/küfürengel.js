module.exports = {
  name:"küfür-engel",
  code:`
 $if[$message[1]==aç]
 $channelSendMessage[$channelID;{description:⚙️ Küfür engel açıldı}{color:$getServerVar[hex]}{delete:5s}]
 $setServerVar[küfürengel;true]
 $endif
 $if[$message[1]==kapat]
 $channelSendMessage[$channelID;{description:⚙️ Küfür engel kapatıldı}{color:$getServerVar[hex]}{delete:7s}]
 $setServerVar[küfürengel;false]
 $onlyIf[$getServerVar[küfürengel]==true;⚠️ Küfür engel zaten kapatılmış{delete:5s}]
 $endif
 $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;⚠️ **aç** veya **kapat** argumanlarını kullanın{delete:7s}]
 $onlyPerms[admin;⚠️ Bunun için __YÖNETİCİ__ iznin olmalı{delete:5s}]
 `
  }
