let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `≡ Use these commands without the prefix: *${usedPrefix}*
┌─⊷ *AUDIOS* 
▢ Bot
▢ Good morning
▢ Good afternoon
▢ Good evening
▢ Fine gentlemen
▢ Don't be Sad
└──────────────`;
  
  let pp = './assets/tohid.jpg';

  // Send a button message
  await conn.sendButton(m.chat, m2, 'TOHID-AI', pp, [
    ['⏍ Info', `${usedPrefix}botinfo`],
    ['⌬ Group', `${usedPrefix}grp`]
  ], m, { quoted: m });

  // Send an image file
  await conn.sendFile(m.chat, pp, 'menu.jpg', m2, m);
}

handler.help = ['menu6'];
handler.tags = ['main'];
handler.command = ['menu6', 'audios'];

export default handler;
