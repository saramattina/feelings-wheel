import "./EmotionalCheckIn.css";

function EmotionalCheckIn() {
  return (
    <>
      <div className="checkin-container">
        <h1>Emotional Check-In</h1>

        <div className="step">
        <h3>Step 1: Identify The Emotion</h3>
        <p>
          What feeling word would best describe what you're feeling at? It's ok
          to not know! Refer to the feelings wheel or skip this step for now!
        </p>
        </div>

         <div className="step">
        <h3>Step 2: Where In Your Body Are You Feeling This Feeling?</h3>
        <p>
          Feelings often come with physical experiences. For example, your palms
          may get sweaty when you're anxious or you may feel your cheeks get
          flushed when embarrassed. Scan your body and notice any physical
          sensations that are related to this feeling.
        </p>
        </div>

         <div className="step">
        <h3>Step 3: What May Have Caused This Feeling?</h3>
        <p>
          Take a few moments and reflect on what may have caused or influenced
          this emotion. Did something happen recently? Did something remind you
          of something from your past? It's ok to not know what the cause is, so
          if you're unsure, move onto the next step.
        </p>
        </div>


        <p className="step-skip">
          ** If you skipped Step 1, take a moment to return to it and see if the
          feeling is more easily identifiable!**
        </p>

         <div className="step">
        <h3>Step 4: Would You Like to Manage This Feeling?</h3>
        <p>
          Think about whether or not you would like to manage this feeling. Not
          all feelings need a coping skill. For example, if you're feeling
          excited, be excited! Otherwise, consider using a coping strategy to
          help manage intense feelings!
        </p>
        </div>
      </div>
    </>
  );
}

export default EmotionalCheckIn;
