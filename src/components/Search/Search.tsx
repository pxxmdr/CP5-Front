"use client";
import { FormEvent, useContext, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { UserContext, UserContextProps } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { CityListProps } from "@/@types/cityTypes";

export default function Search() {
  const router = useRouter();
  const { userName } = useContext(UserContext) as UserContextProps;
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState<CityListProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const loadCities = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );

      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loadCities();
  };

  const handleNavigate = (cityCode: number) => {
    router.push(`/?cityCode=${cityCode}`);
  };

  return (
    <Layout>
      <Header title="Busca" userName={userName} />
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
          label="Buscar cidade"
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
        />
        <Button type="submit">Buscar</Button>
      </form>

      <div>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          <ul>
            {cityList.length > 0 ? (
              cityList.map((city) => (
                <li key={city.id} onClick={() => handleNavigate(city.id)}>
                  {city.nome} / {city.estado}
                </li>
              ))
            ) : (
              <h1>No data found.</h1>
            )}
          </ul>
        )}
      </div>
    </Layout>
  );
}
