# Discord Listener Self-Bot

[🇬🇧 English](#english) | [🇹🇷 Türkçe](#türkçe)

---

<a name="english"></a>
## 🇬🇧 English

A Node.js application that listens to messages (and attachments) in a specific Discord channel and forwards them to another channel. Built with `discord.js-selfbot-v13`.

### Features

- Real-time message monitoring from a source channel.
- Forwards message content and author info to a target channel.
- Forwards attachments (images, videos, etc.) as links.

### Installation

1. Clone or download the project.
2. Install the necessary packages via terminal:

\`\`\`bash
npm install
\`\`\`

### Configuration

The project requires a `config.json` file to work. Create a file named `config.json` in the root directory and populate it as follows:

\`\`\`json
{
    "token": "YOUR_DISCORD_TOKEN",
    "targetGuildId": "TARGET_GUILD_ID",
    "targetChannelId": "TARGET_CHANNEL_ID",
    "sourceGuildId": "SOURCE_GUILD_ID",
    "sourceChannelId": "SOURCE_CHANNEL_ID"
}
\`\`\`

#### Settings:
- **token**: Your personal Discord account token. (WARNING: Do not share this with anyone!)
- **targetGuildId**: ID of the server where messages will be sent.
- **targetChannelId**: ID of the channel where messages will be sent.
- **sourceGuildId**: ID of the server to listen to.
- **sourceChannelId**: ID of the channel to listen to.

### Usage

After configuring, start the bot:

\`\`\`bash
node index.js
\`\`\`

You will see `Username is ready!` in the console when it starts.

### ⚠️ Disclaimer

This project uses a **Self-Bot** (automating a user account). According to Discord Terms of Service (TOS), using self-bots is prohibited and may result in your account being banned. Use at your own risk.

---

<a name="türkçe"></a>
## 🇹🇷 Türkçe

Bu proje, belirli bir Discord kanalındaki mesajları (ve ekleri) dinleyen ve bunları başka bir kanala yönlendiren bir Node.js uygulamasıdır. `discord.js-selfbot-v13` kütüphanesini kullanır.

### Özellikler

- Belirtilen kaynak kanaldaki mesajları anlık olarak yakalar.
- Mesaj içeriğini ve gönderen bilgisini hedef kanala iletir.
- Resim, video gibi ekleri (link olarak) yönlendirir.

### Kurulum

1. Projeyi bilgisayarınıza indirin.
2. Gerekli paketleri yüklemek için terminalde şu komutu çalıştırın:

\`\`\`bash
npm install
\`\`\`

### Yapılandırma (Configuration)

Projenin çalışması için `config.json` dosyasına ihtiyacı vardır. Ana dizinde `config.json` adında bir dosya oluşturun veya mevcut dosyayı aşağıdaki gibi düzenleyin:

\`\`\`json
{
    "token": "SENIN_DISCORD_TOKENIN",
    "targetGuildId": "HEDEF_SUNUCU_ID",
    "targetChannelId": "HEDEF_KANAL_ID",
    "sourceGuildId": "KAYNAK_SUNUCU_ID",
    "sourceChannelId": "KAYNAK_KANAL_ID"
}
\`\`\`

#### Ayarların Açıklaması:
- **token**: Kendi Discord hesabınızın token'ı. (DİKKAT: Tokeninizi kimseyle paylaşmayın!)
- **targetGuildId**: Mesajların gönderileceği sunucunun ID'si.
- **targetChannelId**: Mesajların gönderileceği kanalın ID'si.
- **sourceGuildId**: Mesajların dinleneceği sunucunun ID'si.
- **sourceChannelId**: Mesajların dinleneceği kanalın ID'si.

### Çalıştırma

Ayarları yaptıktan sonra botu başlatmak için:

\`\`\`bash
node index.js
\`\`\`

Bot çalışmaya başladığında konsolda `KullanıcıAdı is ready!` şeklinde bir çıktı göreceksiniz.

### ⚠️ Yasal Uyarı

Bu proje **Self-Bot** (Kullanıcı hesabı otomasyonu) kullanır. Discord Hizmet Koşulları'na (TOS) göre self-bot kullanımı yasaklanabilir veya hesabınızın kapatılmasına neden olabilir. Sorumluluk tamamen kullanıcıya aittir.
