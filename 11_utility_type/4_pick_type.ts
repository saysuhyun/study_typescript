/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

// Post의 모든 값이 아니라 입력할 값만 Pick으로 세팅
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    // createdAt의 경우 자동으로 생성되도록 세팅 
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});