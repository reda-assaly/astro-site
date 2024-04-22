import Astro from 'astro';

export async function fetchPostBySlug(slug) {
    const allPosts = await Astro.glob('../content/posts/*.md'); 
    
    const post = allPosts.find((post) => post.frontmatter.slug === slug); 
  
    if (!post) {
      throw new Error('Post not found');
    }
  
    return post;
  }