const SUNBIRD_TRANSLATE_URL = 'https://api.sunbird.ai/tasks/translate';
const SUNBIRD_API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzc2VzYWx1YWxsYW4wNiIsImFjY291bnRfdHlwZSI6IkZyZWUiLCJ0diI6MSwiZXhwIjo0OTQzODUwNjcxfQ.nx7ccFmwjK_cXUXTqIdXludtNiV_3dZ9b2pASzRNrnA';

const form = document.querySelector('#translation-form');
const sourceLanguage = document.querySelector('#source-lang');
const targetLanguage = document.querySelector('#target-lang');
const result = document.querySelector('#translated-text');
const details = document.querySelector('#translation-details');
const submit = document.querySelector('#translate-button');

document.querySelector('#swap-languages').addEventListener('click', () => {
  [sourceLanguage.value, targetLanguage.value] = [targetLanguage.value, sourceLanguage.value];
});

form.addEventListener('submit', async (event) => {
  event.preventDefault(); submit.disabled = true; submit.textContent = 'Translating…'; result.classList.remove('placeholder'); result.textContent = ''; details.textContent = '';
  try {
    const response = await fetch(SUNBIRD_TRANSLATE_URL, { method: 'POST', headers: { Authorization: `Bearer ${SUNBIRD_API_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ text: document.querySelector('#source-text').value, source_language: sourceLanguage.value, target_language: targetLanguage.value }) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const providerError = data.detail || data.message || data.error;
      const errorMessage = typeof providerError === 'string' ? providerError : JSON.stringify(providerError);
      throw new Error(errorMessage || `Translation request failed (${response.status}).`);
    }
    const translatedText = data.output?.translated_text;
    if (!translatedText) throw new Error('The translation service returned no translated text.');
    result.textContent = translatedText;
    details.textContent = '';
  } catch (error) {
    console.error('Translation request failed:', error);
    result.textContent = 'Unable to translate that text.';
    details.textContent = error instanceof Error ? error.message : 'Check the browser console for details.';
  }
  finally { submit.disabled = false; submit.textContent = 'Translate'; }
});
