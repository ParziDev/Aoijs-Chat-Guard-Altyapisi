module.exports = {
  name:"spam-engel",
  code:`
 $if[$message[1]==aç]
 $channelSendMessage[$channelID;{description:⚙️ Spam engel açıldı}{color:$getServerVar[hex]}{delete:7s}]
 $setServerVar[spamengel;true]
 $endif
 $if[$message[1]==kapat]
 $channelSendMessage[$channelID;{description:⚙️ Spam engel kapatıldı}{color:$getServerVar[hex]}{delete:7s}]
 $setServerVar[spamengel;false]
 $onlyIf[$getServerVar[spamengel]==true;⚠️ Spam engel zaten kapatılmış{delete:5s}]
 $endif
 $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;⚠️ **aç** veya **kapat** argumanlarını kullanın{delete:7s}]
 $onlyPerms[admin;⚠️ Bunun için __YÖNETİCİ__ iznin olmalı{delete:5s}]
 `
  }
