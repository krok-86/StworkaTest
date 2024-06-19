import './App.css';

function App() {
  const step = 6;
  const totalSteps = 7;
  return (
    <div className="App">
      <div className='content'>
        <div className='action' style={{ '--step':(step / 7) * 100 }}>
          {step}/{totalSteps}
          <div className='progress-wraper'>
            <svg width="62.5" height="62.5" viewBox="0 0 240 250" className="circular-progress">
              <circle className="bg"></circle>
              <circle className="fg"></circle>
            </svg>
          </div>
        </div>
        <div className='action-text'>
          <div className='action-text-checklist'>Чеклист</div>
            <div className='action-text-count'>Выполнено: {step} из {totalSteps} действий</div>
            <div className=' action-text-next'>Следующее действие: Созвониться с клиентом до 23.05.24 12:00</div>
        </div>
        <button className='action-button'>Открыть чеклист</button>
      </div>
    </div>
  );
}

export default App;
