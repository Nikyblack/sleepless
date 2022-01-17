import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const SuccessColor = "#83D78C";
const DeleteColor = "#E25454";
const DarkColor = "#282C34";

const Title = styled.div`
  font-family: Fredoka One;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.8em;
  max-width: 900px;
`;

const SubTitle = styled.div`
  font-family: Fredoka One;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 0.8em;
  max-width: 900px;
`;

const YesButton = styled.div`
  background: ${SuccessColor};
  color: ${DarkColor};
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 80px;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
`;

const NoButton = styled.div`
  background: ${DeleteColor};
  color: ${DarkColor};
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 80px;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function App() {
  const [sleep, setSleep] = useState(false);
  const [excercise, setExcercise] = useState(false);
  const [caffein, setCaffein] = useState(false);
  const [midnight, setMidnight] = useState(false);

  const [slides, setSlides] = useState("main");

  const resetState = () => {
    setSleep(false);
    setExcercise(false);
    setCaffein(false);
    setSlides("main");
  };

  return (
    <div className="App">
      {/* main page */}
      {slides == "main" && (
        <section className="App-header">
          <Title>Экспертная система для борьбы с бессонницей🌙</Title>
          <SubTitle>У вас проблемы со сном?😴</SubTitle>
          <YesButton
            onClick={() => {
              setSlides("1");
            }}
          >
            Я не могу уснуть!
          </YesButton>
        </section>
      )}

      {/* Q.1 */}
      {slides == "1" && (
        <section className="App-header">
          <Title>На этой неделе я спал в среднем 8 часов</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSleep(true);
                setSlides("2");
              }}
            >
              Да
            </YesButton>
            <NoButton
              onClick={() => {
                setSlides("2");
              }}
            >
              Нет
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 2 */}
      {slides == "2" && (
        <section className="App-header">
          <Title>Я занимаюсь физической нагрузой каждый день</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setExcercise(true);
                setSlides("3");
              }}
            >
              Да
            </YesButton>
            <NoButton
              onClick={() => {
                setSlides("3");
              }}
            >
              Нет
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 3 */}
      {slides == "3" && (
        <section className="App-header">
          <Title>На этой неделе я выпил 1-2 чашки кофе</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSlides("4");
              }}
            >
              Да
            </YesButton>
            <NoButton
              onClick={() => {
                setCaffein(true);
                setSlides("4");
              }}
            >
              Я выпил больше
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* Q. 4 */}
      {slides == "4" && (
        <section className="App-header">
          <Title>Я ложусь спать до 12 часов ночи</Title>
          <ButtonContainer>
            <YesButton
              onClick={() => {
                setSlides("result");
              }}
            >
              Да
            </YesButton>
            <NoButton
              onClick={() => {
                setMidnight(true);
                setSlides("result");
              }}
            >
              Нет
            </NoButton>
          </ButtonContainer>
        </section>
      )}

      {/* RESULT PAGE */}
      {slides == "result" && (
        <section className="App-header">
          {sleep && excercise && !caffein && !midnight && (
            <>
              <Title>
              Я думаю, что с тобой все в порядке. Попробуй закрыть глаза и снова заснуть🙂
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && excercise && !caffein && !midnight && (
            <>
              <Title>
              Я думаю, что вам не хватает нескольких часов сна. 
              Убедитесь, что у вас есть 7 - 8 часов качественного сна. 🤔
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && !excercise && !caffein && !midnight && (
            <>
              <Title>
              Я думаю, что вам не хватает нескольких часов сна и немного физических активности. 
              Убедитесь, что вы получаете 7 - 8 часов качественного сна и выполняете физические упражнения не реже двух раз в неделю.
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && !excercise && caffein && !midnight && (
            <>
              <SubTitle>
              Слишком большое потребление кофеина и отсутствие физических упражнений не утомят ваше тело, 
              но утомят мозг. Кофеин будет мешать вашему мозгу устанавливать время для вашего сна. 
              Постарайтесь уменьшить потребление кофеина и делайте небольшие упражнения 
              (например, бег на месте) перед сном
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && !excercise && caffein && midnight && (
            <>
              <Title>
              Худшее состояние, которое вы могли бы получить. Обратитесь за помощью к врачу. 🩺💉
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && !excercise && !caffein && !midnight && (
            <>
              <Title>
              Регулярные упражнения очень важны. 10-15 минут бега трусцой или легкие упражнения 
              значительно повысят качество вашего сна. Тебе стоит попробовать. 🏃‍♀️🏃‍♂️
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && !midnight && (
            <>
              <SubTitle>
              Слишком большое потребление кофеина и отсутствие физических упражнений не утомят ваше тело, 
              но утомят мозг. Кофеин будет мешать вашему мозгу устанавливать время для вашего сна. 
              Постарайтесь уменьшить потребление кофеина и делайте небольшие упражнения 
              (например, бег на месте) перед сном
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && midnight && (
            <>
              <SubTitle>
              Засиживание допоздна после 12 часов ночи серьезно повлияет на ваши биологические часы. 
              Я предлагаю вам сделать несколько легких упражнений перед сном, утомить свое тело, 
              чтобы оно заставило мозг заснуть.
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && excercise && caffein && !midnight && (
            <>
              <Title>Сократите потребление кофеина. Это должно вам помочь.</Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && excercise && caffein && !midnight && (
            <>
              <Title>
              Ваше тело должно быть сейчас очень уставшим. 
              Попробуйте закрыть глаза, принять удобное положение и заснуть.
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && excercise && caffein && midnight && (
            <>
              <Title>
              Вы можете попытаться скорректировать свой график сна, 
              просыпаясь рано, и не помешает уменьшить потребление кофеина
              </Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && excercise && !caffein && midnight && (
            <>
              <Title>Старайтесь ложиться спать пораньше, чтобы скорректировать свой график сна.</Title>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && excercise && caffein && midnight && (
            <>
              <SubTitle>
              Кофеин заставляет вас дольше бодрствовать. 
              Сон после 12 часов ночи может испортить ваш график сна. 
              Постарайтесь уменьшить потребление кофеина и ложитесь спать пораньше
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && !excercise && caffein && midnight && (
            <>
              <SubTitle>
              Кофеин заставляет вас дольше бодрствовать. 
              Сон после 12 часов ночи может испортить ваш график сна. 
              Постарайтесь уменьшить потребление кофеина и 
              сделайте несколько легких упражнений перед ранним сном.
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {sleep && !excercise && !caffein && midnight && (
            <>
              <SubTitle>
              Если вы не будете заниматься физическими упражнениями, ваше тело не устанет, 
              поэтому вы сможете больше бодрствовать. Проблема заключается в том, что когда вы спите 
              после 12 часов ночи, это может нарушить ваш график сна. Попробуйте сделать несколько легких 
              упражнений перед сном и ранним утром после пробуждения.
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}

          {!sleep && !excercise && !caffein && midnight && (
            <>
              <SubTitle>
              Если вы не будете заниматься физическими упражнениями, ваше тело не устанет, 
              поэтому вы сможете больше бодрствовать. Проблема заключается в том, что когда вы спите 
              после 12 часов ночи, это может нарушить ваш график сна. Постарайтесь сделать несколько легких 
              упражнений перед сном и выспаться в общей сложности не менее 7 часов.
              </SubTitle>
              <SubTitle>Не согласен? Попробуй ответь снова.</SubTitle>
              <YesButton onClick={resetState}>Повторить попытку</YesButton>
            </>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
