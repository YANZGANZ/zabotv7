let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083103592954]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [085868010957]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
