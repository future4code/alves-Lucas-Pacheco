import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { BASE_URL, HEADER } from "../constants/credentiais";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ButtonPost, DisplayForms, InputBody, InputTitle } from "../style/StyleadFeed";
export default function CardCreatePost({stateLike, setStateLike}) {
    const { form, handleChange, cleanFields } = useForm({ title: "", body: "" })
   

    const onSubmitCreate = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/posts`, form, HEADER)
            .then((res) => {
                cleanFields()
                setStateLike(!stateLike)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return (
        <div>
            <DisplayForms onSubmit={onSubmitCreate}>
                <InputTitle 
                    name="title"
                    placeholder='Título da Postagem'
                    type='text'
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <InputBody
                    name="body"
                    placeholder='Descrição da Postagem'
                    type='text'
                    value={form.body}
                    onChange={handleChange}
                    required
                />
                <ButtonPost>Postar</ButtonPost>
            </DisplayForms>
        </div>
    )
}
