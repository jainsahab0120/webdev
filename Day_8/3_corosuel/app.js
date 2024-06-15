let arr = [
   ' https://images.unsplash.com/photo-1717765697742-6b2f48f4a1fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8://unsplash.com/photos/a-table-topped-with-plates-and-bowls-filled-with-food-FEHKBJIBNpQ' ,
   ' https://images.unsplash.com/photo-1717705422478-0b42e89e06b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1718248028321-81be470c2be6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' ,
   'https://images.unsplash.com/photo-1718049048018-2ed7616db018?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
   'https://www.istockphoto.com/photo/hindu-god-hanuman-idol-huge-statue-of-indian-lord-hanuman-gm1007645726-271861694?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhanuman&utm_medium=affiliate&utm_source=unsplash&utm_term=hanuman%3A%3A%3A'

]

let image = document.querySelector('img');
let n = 0;
setInterval(()=>{

    image.setAttribute('src' ,arr[n] );
    
    n= (n+1) % arr.length;

},3000)