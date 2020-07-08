import React, { useState,useEffect,useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel,{ Modal,ModalGateway } from 'react-images';

import './style.css';
import api from '../../services/api';

export default function Fotografias(){
  const [currentImage,setCurrentImage] = useState(0);
  const [openingImage,setOpeningImage] = useState(false);
  const [photos,setPhotos] = useState([]);
  const [page,setPage] = useState(1);
  const [photoPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiUrl = `users/gabriel_tomaz/photos/?client_id=D0LBzLz8h7rEBO9VM2sMeJefIQfaeq4IHBxNmH7_ips&page=${page}`;


  function handleScroll(){
    //Verificando o tamanho interno da página, a posição do scroll e o tamanho tatal da página;
    if(window.innerHeight + document.documentElement.scrollTo < 
      document.documentElement.offsetHeight || page === totalPage || loading){
        return;
      }
      setPage(page + 1);
  }

  async function getPhotos(){
    await api.get(apiUrl)
    .then(response => {
      setTotalPage(response.headers['X-Total-Count'] / photoPage);
      return response.data;
    })
    .then(data => setPhotos([...photos, ...data]));
    setLoading(true)
  }

  useEffect(() => {
   getPhotos();
   window.addEventListener('scroll' ,handleScroll);

  },[page]);

  const openImage = useCallback((event, {photo,index}) => {
    setCurrentImage(index);
    setOpeningImage(true);
  },[]);

  const closeImage = () => {
    setCurrentImage(0);
    setOpeningImage(false);
  }

  return(
    <section className="photos">
      <div className="photos-list">
        <div className="photos-top-bar">
          <h1 className="photos-title">Fotografias</h1>
        </div>
        <Gallery photos={ 
          photos.map(photo => ({
            src: photo.urls.regular,
            width: photo.width,
            height: photo.height,
          }))
        } onClick={ openImage }/>
        <ModalGateway>
          {openingImage ?(
            <Modal onClose={ closeImage }>
              <Carousel 
                currentIndex={ currentImage } 
                views={photos.map(photo => ({
                  ...photo,
                  src: photo.urls.regular,
                  caption: photo.title
                }))}></Carousel>
            </Modal>
          ): null}
        </ModalGateway>
      </div>
    </section>
  );
}