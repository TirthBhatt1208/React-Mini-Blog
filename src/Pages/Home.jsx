import React , {useEffect , useState} from 'react'
import appwriteService from '../appwrite/config'
import {Container , PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const status = useSelector(state => state.auth.status);
    const userId = useSelector(state => state.auth?.userData?.$id);

    //console.log("Home :: User Id : " , userId);
    
    useEffect(() => {

        if(status) {
            appwriteService.getPosts()
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents)
                    }
                })
                .catch((error) => {
                    console.log("home :: error");

                    console.error("Error fetching posts:", error);
                });
        }
    }, []);
    
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flext flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login To Read Post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
        
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            
                            <div key={post.$id} className='p-2 w-1/4'>
                                {userId === post.userId &&
                                    <PostCard {...post} />}
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home