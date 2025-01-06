// Array untuk menyimpan data postingan
let posts = [
    {
        title: "Masa Depan Mobil Listrik: Apa yang Harus Kita Harapkan?"
        content: "blog yang bertemakan teknologi.",
        views: 1234,
        comments: 56
    },
    {
        title: "Mengenal Budaya Lokal: Pengalaman Perjalanan yang Berharga",
        content: "blog yang bertemakan Perjalanan.",
        views: 987,
        comments: 78
    }
];

// Fungsi untuk menambahkan postingan baru
function addPost() {
    const title = prompt("Masukkan judul postingan:");
    const content = prompt("Masukkan konten postingan:");
    
    if (title && content) {
        const newPost = {
            title: title,
            content: content,
            views: 0,
            comments: 0
        };
        posts.push(newPost);
        alert("Postingan berhasil ditambahkan!");
        renderPosts();
    } else {
        alert("Judul dan konten tidak boleh kosong!");
    }
}

// Fungsi untuk merender semua postingan
function renderPosts() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '<h1>Blog Dashboard</h1>'; // Reset konten

    posts.forEach((post) => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <div class="blog-info">
                <div class="views">
                    <p><i class="fas fa-eye"></i> <strong>Views:</strong> ${post.views}</p>
                </div>
                <div class="comments">
                    <p><i class="fas fa-comments"></i> <strong>Komentar:</strong> ${post.comments}</p>
                </div>
            </div>
        `;
        mainContent.appendChild(blogPost);
    });
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Render postingan saat halaman dimuat
window.onload = renderPosts;