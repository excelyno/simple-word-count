document.getElementById('countBtn').addEventListener('click', countWordsAndChars);

function countWordsAndChars() {
    const text = document.getElementById('textInput').value;

    // Menghitung karakter
    const charCount = text.length;

    // Menghitung kata
    const words = text.trim().split(/\s+/); // Menghapus spasi ekstra
    const wordCount = words.filter(word => word !== "").length;

    // Menampilkan hasil
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = wordCount;
}
