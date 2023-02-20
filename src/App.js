
import './App.css';

function App() {
  return (
    <div className='content'>
      <div>
        <label for="keep">Keep comments for the day (What was good? What do we want to continue?)</label><br/>
        <input name="keep" className="input-box" />
        <div>
          <p>How effective were today's sessions in helping your learning? Please rate on a scale of 1-5.</p>
          <input type="radio" id="html" name="session_rating" value="1"/>
          <label for="1">1 - Very ineffective</label><br/>
          <input type="radio" id="css" name="session_rating" value="2"/>
          <label for="2">2 - Ineffective</label><br/>
          <input type="radio" id="javascript" name="session_rating" value="3"/>
          <label for="3">3 - Somewhat ineffective</label>
        </div>
      </div>
    </div>
  );
}

export default App;
