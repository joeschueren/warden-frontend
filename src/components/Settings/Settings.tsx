import React, {useState, useEffect} from "react";
import ImageCompressor from "image-compressor.js";
import SetBudget from "../SetBudget/SetBudget";
import Error from "../Error/Error";
import "./Settings.css";

const Settings: React.FC = () => {

    const [fileData, setFileData]: [Blob | null, any] = useState(null);
    const [isError, setIsError] = useState(false);
    
    async function checkAuth(){
        try{
            const res = await fetch("https://season-best-yoke.glitch.me/check-auth", {
                method: "GET",
                credentials: "include"
            })

            const status = res.status;
            
            if(status !== 200){
                window.location.href = "/login";
            }
        } catch(err) {
            setIsError(true);
        }
    }

    useEffect(() => {
      document.title = "Settings";
      checkAuth();
    }, [])

    async function handleUpload(e: any){
        const file = await processImage(e.target.files[0]);
        if(file.type.startsWith("image/")){
            const fileData = await new ImageCompressor().compress(file)
            setFileData(fileData);
        }
        else{
            e.target.value = "";
        }
    }

    console.log(JSON.stringify(fileData))

    const processImage = (file: any): Promise<Blob> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
    
          reader.onload = (e: any) => {
            const img = new Image();
            img.src = e.target.result;
    
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
    
              const targetWidth = 250;
    
              const aspectRatio = 1 / 1;
              const targetHeight = targetWidth / aspectRatio;
    
              canvas.width = targetWidth;
              canvas.height = targetHeight;
                
              if(ctx){
                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
              }
    
              canvas.toBlob((blob: any) => {
                console.log(JSON.stringify(blob));
                resolve(blob);
              }, file.type);
            };
          };
    
          reader.onerror = (error) => {
            reject(error);
          };
    
          reader.readAsDataURL(file);
        });
      };

    function submitChanges(){
      try{
        if(fileData){
            const formData = new FormData();
            formData.append("imageData", fileData)
            fetch("https://season-best-yoke.glitch.me/upload-picture", {
                method: "POST",
                credentials: "include",
                body: formData
            })
            .then(res => {
              if(res.status === 200){
                window.location.reload();
              }
            })

        }
      } catch(err) {
          setIsError(true);
      }
    }

    function submitIncome(e: any){
      const amount = e.target.income.value;
      try{
        fetch("https://season-best-yoke.glitch.me/max-budget", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({amount: amount})
        })
      } catch(err) {
        setIsError(true);
      }
    }

    if(isError){
        return(<Error number="500" message="Error Contacting the Server Try Again"/>);
    }
    else return(<div className="settings-container">
      <div className="settings-div">
        <p className="settings-title">Account Settings</p>
          <div className="settings-form">
            <div className="profile-update">
              <div className="picture-container">
                <p className="settings-header income-header">Update Picture</p>
                {fileData ? <img className="demo-picture" src={URL.createObjectURL(fileData)} alt="User Submitted" /> : <div className="no-image demo-picture"></div>}
                <input className="file-input" type="file" onChange={handleUpload} name="picture"></input>
                <button className="confirm-button" onClick={submitChanges}>Save Changes</button>
              </div>
              <form className="update-income" onSubmit={submitIncome}>
                <p className="income-header">Update Income</p>
                <p className="income-text">Update your current income or goals</p>
                <div>
                  $ <input className="budget-input" type="number" step=".01" placeholder="Income" name="income"></input>
                </div>
                <button type="submit" className="confirm-button update-button">Save Changes</button>
              </form>
            </div>
            <div className="set-budget">
              <SetBudget/>
            </div>
          </div>
      </div>
    </div>)
}

export default Settings;