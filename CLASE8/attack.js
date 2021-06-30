const fetch = require('node-fetch');

while(true) {
  console.log('asdas')
  fetch("https://accounts.spotify.com/login/password", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "es-419,es;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "__HOST-sp_fid=cdf94cce-0d68-419c-9c04-8913c3e8ab96; __Host-device_id=AQA7NNk-rLLK50dp0q8Fx0HINj59OiCd8Xb352YFlHbsLL2YIR55xk56ql3st6dEJJ6mN49AtQgtIUGeE2FpGM2-2DPXE3Pixn4; __Secure-TPASESSION=AQA4xTTGXSch57aHHE8nOpiZG8hPtd3W4KjrO3lvBHpvdJgOB/itEg3baDl/8MryK4qzpIporXmr435/blPtcQoqObkPHhCRyzw=; csrf_token=AQBShKPmrNDki1LKgYsf1dhFd5VoSAp_1WKxV9ldILgYQbLVLLOaBucNI_1QrOSrdqsJAZeQc9lCEklSMxFWh-rHXCQylPYRwARI28FAKilYm-E; __bon=MHwwfC0xOTgyNzQ1MDc5fC04MzI3NTI5MzMxOHwxfDF8MXwx; remember=asdasdasdasd"
    },
    "referrer": "https://accounts.spotify.com/en/login/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "remember=true&continue=https%3A%2F%2Faccounts.spotify.com%2Fen%2Fstatus&username=asdasdasdasd&password=qweqweqweqwe&recaptchaToken=03AGdBq259I_0_cY9BvpyWsAZzMHAoYDVIIZeIpYjSHyHkvVAzSrFnOD5cBxxrYyGm0bDIPjq2W_IbBjN5mjdosCrdMP2JIa-N5MjdU447RHdHyydACJXMw3uLq8a9ta5IMYTzBsrmXysDYyqrr-LFChyk-kKDyBUeA7o-4uyUabMYJNQvAbAPTIxIV2OvG3Gdt2f6UkipWphwrF6xezwiDFvJiKCOiFsXwA3ALSVY-S-zTh2X7vbvf68-4KbzuwqyBEreylAyxGxpaqzgfuMDFJmB-fQx8PY81YjJHZxy2YmUwyqOkt6LB8onzv_0LCz5goytaO3zx-XVvI4f7E1EuCd89QsTOdmudlZn412N9hDvinqNGcbaDYjUo4mZuIHxnkwMrsMOzBm8qTcVLD6oeko3qd2oPzFjB4D3Z3KGFhsGd8TmZ0WF4SnWkRb2EyW8k5QDUXlLVTo1nJTOftajdRaeWp5rRwsu6bPf1My_ZvlWSS0zOMhroEhXhTPkdnKvx_fttTJvAP8tJLUbKsCvSoA0AUkZ0eZLOMg__Qtrp1ZnSOxZ9d1F7NxMhd6mqNA0mYhWXab10QJJGZ3pUck6gxbdPGeJ_tR9KCoGUqzOAH-WR3iGPYflfG702l7tYxnXDMepbR1DSmkGsMcKItAIfOt91Ou_y331XI-ANEA_DJG0iJ1ZlpSCey5JVspZbspj32iCt2UebarzdG1rbvVDP5Ia9X3LGOPr1VLRPzp-aKK4z1SHobbtCcLyAK1FIihBTAxuvIjTAuQ7YLK9YOeNYWrDKBW7VJJ92GOc9h0M_pz_ctmHx0-d8PAjF1lLFVva94ZdjGENPdZbrDr4A2N5FpPQYDw6JDPh1fMW2vilHaQ3Y1nKuy6vKtw80lOZA7qwy_auVNED_OlhOE77aL5O5AS8CyE1rBK_fjQ4L0iOxewiuUkTmcmw-4tJXE_gBV8yRYPpDwxsXb9Ja0OX1GCkaRv38y8NcmQO3VoGWDrEt2r9f09fcHeOjiLmPpriyTnzDC-xGiW-unHOvwperWKJnnE9_L0Qcc2bwxbC13u8mih6I6PxdXrxkCb3PeCe1JCUuuMLY5Y811aeUSjy13fEadI4vImeBLnHHtfwNcJXhh9zWFYdQN_eybTVOXLPcT95iyLTiSKA8qQcdCItg1hUOlxfnlr1a8fkUFrMBLHP4BIs8fb2FX4CGAAMk1fklEgAn1-B0sserE0mz30Rm8LS-I9C_IoqToFEtdAjTDuG2FhfEx0G9MRE67s&csrf_token=AQBShKPmrNDki1LKgYsf1dhFd5VoSAp_1WKxV9ldILgYQbLVLLOaBucNI_1QrOSrdqsJAZeQc9lCEklSMxFWh-rHXCQylPYRwARI28FAKilYm-E",
    "method": "POST",
    "mode": "cors"
  })
  .then(response => response.json())
  .then(data => console.log('error: ', data));
}