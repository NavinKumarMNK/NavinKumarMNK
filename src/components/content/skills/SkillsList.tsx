import ReactMarkdown from 'react-markdown';


export const SkillsList: React.FunctionComponent = () => {
    
    return (
        <section className='py-8 md:py-16 '>
  <h2 className='mb-3 text-center md:text-left'>Featured Skills 💪</h2>
  <p className='mb-8 text-center md:text-left '>Technologies, Frameworks & Languages I'm Expertise in</p>
  <div className='flex space-x-3'>
  <div className='justify-center  md:justify-start bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6'>
    <p className='text-center pb-3'><strong>Programming Languages</strong></p>
    <div className='flex flex-row flex-wrap space-x-3 space-y-3  justify-center items-center'>
    <img title="Python" alt="Python" width="50px" src="https://raw.githubusercontent.com/github/explore/master/topics/python/python.png"/>
    <img alt="TS" title="TypeScript" width="40px" src="https://raw.githubusercontent.com/gilbarbara/logos/c3bbf0e707fa9d7940c2c7b84ac72fa954a444c9/logos/typescript-icon.svg"/>
    <img alt="C++" title="C++" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"/>
    <img title="Rust" alt="Rust" width="40px" src="https://raw.githubusercontent.com/gilbarbara/logos/c3bbf0e707fa9d7940c2c7b84ac72fa954a444c9/logos/rust.svg"/>
    <img title="SQL" alt="SQL" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"/>
    <img title="MongoDB" alt="MongoDB" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"/>
    <img title="Java" alt="Java" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"/>
    <img src="https://raw.githubusercontent.com/gilbarbara/logos/c3bbf0e707fa9d7940c2c7b84ac72fa954a444c9/logos/tailwindcss-icon.svg" alt="tailwindcss" width="40" height="40"/>
    </div>
  </div>

  <div className='justify-center md:justify-start bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6'>
    <p className='text-center pb-3 '><strong>Frameworks & Libraries </strong></p>
    <div className='flex flex-wrap space-x-3 space-y-3 justify-center items-center'>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
    <img title="PyTorch" alt="PyTorch" width="40" height="40" src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"/>
    <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/ray-project/ray/master/dashboard/client/src/logo.svg" alt="Ray" width="40" height="40"/>
    <img title="Tauri" alt="Tauri" width="40px" src="https://raw.githubusercontent.com/gilbarbara/logos/c3bbf0e707fa9d7940c2c7b84ac72fa954a444c9/logos/tauri.svg"/>
    <img title="Rapids" alt="Rapids" width="100px" src="https://camo.githubusercontent.com/a06b6a44ef25ee9aa6bc319b20e43c11c86325bdf2275761bec0acdaa20fee24/68747470733a2f2f7261706964732e61692f6173736574732f696d616765732f7261706964735f6c6f676f2e706e67"/>
    </div>
  </div>

  <div className='justify-center  md:justify-start bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6'>
    <p className='text-center pb-3'><strong>Infrastructure & Softwares</strong></p>
    <div className='flex flex-row flex-wrap space-x-3 space-y-3  justify-center items-center'>
    <img title="Git" alt="Git" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"/>
    <img title="Docker" alt="Docker" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"/>
    <img title="Kubernetes" alt="Kubernetes" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"/>
    <img title="Linux" alt="Linux" width="40px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"/>
    <img title="AWS" alt="AWS" width="40px" src="https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png"/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40"/>
    <img src="https://dwglogo.com/wp-content/uploads/2016/07/1300px_Tableau_Software_logo-611x420.png"  alt="tableau" width="40" height="40"/>
    <img title="MLFlow" alt="MLFlow" width="40px" src="https://raw.githubusercontent.com/mlflow/mlflow/master/assets/icon.svg"/>
    <img title="Wandb" alt="Wandb" width="40px" src="https://raw.githubusercontent.com/wandb/assets/main/wandb-dots-logo.svg"/>
    </div>
  </div>
  </div>

</section>


    )
}

