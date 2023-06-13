export default function emailTemplate(tariff, name) {
  return `
<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:v='urn:schemas-microsoft-com:vml'>

<head>
  <meta charset='utf-8'>
  <meta content='width=device-width' name='viewport'>
  <meta content='IE=edge' http-equiv='X-UA-Compatible'>
  <meta name='x-apple-disable-message-reformatting'> <!-- Disable auto-scale in iOS 10 Mail entirely -->
  <meta content='telephone=no,address=no,email=no,date=no,url=no' name='format-detection'>
  <!-- Tell iOS not to automatically link certain text strings. -->
  <meta content='light dark' name='color-scheme'>
  <meta content='light dark' name='supported-color-schemes'>
  <title>Вітаємо вас!</title>
  <style></style>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  </style>
  <style>
      * {
          font-family: 'Roboto', sans-serif !important;
      }
  </style>
<body style='-webkit-font-smoothing: antialiased; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;'>
<table border='0' cellpadding='0' cellspacing='0' class='body' role='presentation' style='width: 100%;'>
  <tr>
    <td>
      <table cellpadding='0' cellspacing='0' role='presentation' width='100%'>
        <tr>
          <td style='border-right: 1px solid #202020; border-bottom: 1px solid #202020; padding: 15px' width='20%'></td>
          <td style='border-bottom: 1px solid #202020; padding: 15px' align='center'>
            <span style='font-style: normal;font-weight: 600;font-size: 16px;line-height: 24px;color: #202020;'>
              <b>Розбираємося з РХП:</b> Онлайн Курс
            </span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align='center' valign='middle' style='padding-top: 30px;'>
      Платіж за тариф ${tariff} було виконано. Дякую, ${name}!
    </td>
  </tr>
</table>
</body>
`
}