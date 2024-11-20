interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

// Omit은 이거 빼고 넣으라고 지정 
function createPost(post: Omit<Post, 'createdAt'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});