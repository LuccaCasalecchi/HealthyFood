import React from 'react'
import Input from '../../components/Input/Input'
import imageService from '../../images/bloco_services.svg'

export default function Register() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Subscribe to receive news and products 🤗</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
           
          />
          <Input
           
          />
          <Input
            
          />
          <Input
           
          />
          <Input
            
          />
          <Input
            
          />
          <Input
            
          />
          <Input
            
          />
         
        </form>
      </div>
      <img src="bloco_services.svg" alt="Register" />
    </div>
  )
}
