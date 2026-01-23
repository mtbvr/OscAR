import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'technicalsupp.lootopia@gmail.com',
    pass: 'begvlireceamflin',
  },
});

export async function sendResetCode(email: string, code: string) {
  const mailOptions = {
    from: 'Lootopia <technicalsupp.lootopia@gmail.com>',
    to: email,
    subject: 'Votre code de réinitialisation Lootopia',
    html: `
      <h2>Réinitialisation du mot de passe</h2>
      <p>Voici votre code :</p>
      <h1>${code}</h1>
      <p>Valable 10 minutes</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
