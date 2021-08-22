import React from 'react'
import Input from '../../components/Input/Input'

export default function Register() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Subscribe to receive news and products 🤗</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Tom Hiddleston"
            error={errors.name}
            {...register("name")}
          />
          <Input
            label="Data de nascimento"
            type="date"
            error={errors.date}
            {...register("date")}
          />
          <Input
            label="CPF"
            type="number"
            error={errors.cpf}
            placeholder="00000000000"
            {...register("cpf")}
          />
          <Input
            label="CEP"
            type="number"
            placeholder="00000000"
            error={errors.cep}
            {...register("cep")}
          />
          <Input
            label="Rua"
            type="text"
            isDisabled
            value={address?.logradouro}
            {...register("street")}
          />
          <Input
            label="Bairro"
            type="text"
            isDisabled
            value={address?.bairro}
            {...register("neighborhood")}
          />
          <Input
            label="Cidade"
            type="text"
            isDisabled
            value={address?.localidade}
            {...register("city")}
          />
          <Input
            label="Estado"
            type="text"
            isDisabled
            value={address?.uf}
            {...register("state")}
          />
          <Button
            variant="solid"
            bg="var(--primary)"
            transition="all 0.2s ease-in-out"
            _hover={{ filter: "brightness(0.8)" }}
            color="white"
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
      <img src="bloco_services.svg" alt="Register" />
    </div>
  )
}
