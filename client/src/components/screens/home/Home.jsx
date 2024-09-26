import { useState } from "react";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import styles from "./Home.module.scss";
import { useAuth } from "../../hooks/useAuth";

function Home() {
  const { isAuth } = useAuth();

  const navigate = useNavigate();
  return (

    <Layout bgImage="/images/home-bg.jpg">

      <h1 className={styles.heading}>START YOUR TRANSFORMATION</h1>	  
      <Button clickHandler={() => navigate(isAuth ? "/new-workout" : "/auth")}>	
        { isAuth ? "Start workout " : "Login"}	
      </Button>
	 
    </Layout>

  );
}

export default Home;
