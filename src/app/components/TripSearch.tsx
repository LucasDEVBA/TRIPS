"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  endDate: Date | null;
  budget: number;
}

const TripSearch = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?text=${
        data.text
      }&startDate=${data.startDate?.toISOString()}&budget=${data.endDate?.toISOString()}`
    );
  };

  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat  lg:py-28 shadow-md">
      <h1 className="text-2xl text-primaryDarker text-center font-semibold lg:text-[2.5rem]">
        Encontre sua próxima <span className="text-primary">Viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg lg:shadow-md">
        <Input
          className="shadow-md"
          placeholder="Onde você quer ir?"
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register("text", {
            required: {
              value: true,
              message: "Campo obrigatório na pesquisa.",
            },
          })}
        />

        <div className="flex gap-4 lg:w-full ">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data de Ida"
                onChange={field.onChange}
                selected={field.value}
                className="w-full shadow-md"
                minDate={new Date()}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data de Volta"
                onChange={field.onChange}
                selected={field.value}
                className="w-full shadow-md"
              />
            )}
          />
          {/* <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                onValueChange={field.onChange}
                value={field.value}
                onBlur={field.onBlur}
                className="shadow-md"
              />
            )}
          /> */}
        </div>
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="w-1/2 lg:h-fit shadow-md"
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
};

export default TripSearch;
