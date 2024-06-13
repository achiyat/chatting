import React, { useState } from "react";
import "./window1.css";

export const Window1 = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="window1-myContainer">
      <header className="window1-custom-header">Window</header>
      <main className="window1-custom-main">Window</main>
      <footer className="window1-custom-footer">
        <input
          type="text"
          className="window1-custom-input"
          placeholder="Type the message here"
          value={message}
          onChange={handleChange}
        />
      </footer>
    </div>
  );
};

//   return (
//     <div className="border border-dark myContainer d-flex flex-column">
//       <header className="p-2 border-bottom border-dark">Window</header>
//       <main className="overflow-auto border-bottom border-dark custom-main"></main>
//       <footer className="p-2">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type the message here"
//           value={message}
//           onChange={handleChange}
//         />
//       </footer>
//     </div>
//   );
// };

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit
// {/* doloribus inventore libero earum molestiae consequatur, nobis alias
// molestias illum facere voluptates delectus maiores aliquid distinctio
// facilis, quis eveniet magni? Tenetur adipisci unde ipsum doloremque, nam
// fuga deserunt vitae veniam voluptas accusamus repellat delectus aut ea
// dolores a ratione qui voluptatum nihil eius esse quis eos! Saepe ex id
// sunt neque dolore veniam molestias numquam ad porro accusantium expedita
// velit ea quis rerum error odio cum quaerat quam, consequatur
// consequuntur! Nisi obcaecati, consequuntur aspernatur eius non aliquam
// expedita molestiae eligendi et laborum! Inventore velit obcaecati atque
// aliquid laudantium similique quae, id qui quisquam ut quidem adipisci
// necessitatibus expedita neque cumque aspernatur quis dolore aliquam?
// Esse eius eum necessitatibus soluta, iure dolorum ipsa molestias
// reiciendis obcaecati quaerat aliquam ullam blanditiis id at porro
// expedita cumque et, tenetur cum quam vitae tempora culpa! At deserunt
// dicta exercitationem architecto aliquid temporibus voluptas dolorum
// sapiente ab nam veniam nihil quae sunt magni ipsa incidunt, fugiat
// facere. Repudiandae recusandae sit totam autem dolores et consectetur
// architecto aliquid ipsum placeat delectus provident magni maxime ipsa
// nam, incidunt consequatur doloremque excepturi itaque distinctio? Ut
// numquam ratione, maxime ex quisquam nostrum architecto autem dolorem,
// assumenda velit eius et praesentium non suscipit quaerat odio cupiditate
// voluptas repellat sequi vel nihil libero. Autem optio sint commodi
// tempore at nemo impedit sapiente fuga animi ut. Quisquam saepe voluptate
// molestiae. Incidunt porro possimus accusantium maiores cum similique
// culpa repellendus. Laboriosam molestias ullam id reprehenderit obcaecati
// consequatur dolores beatae ad dolore odit rerum quam et, provident
// mollitia explicabo nulla molestiae neque inventore rem quia doloremque
// minus nemo ipsam. Sint itaque necessitatibus aut neque labore
// reprehenderit, tempora magni maiores molestias similique quo quam, esse
// fugit est vel veritatis deserunt vero deleniti cum totam! Non corporis,
// velit voluptate error dignissimos dolorum deleniti laboriosam ipsam
// nihil commodi repellendus ut sapiente praesentium exercitationem ullam?
// Tempora, illo. Beatae ullam dignissimos eaque dolorum saepe. Eum a, vel
// commodi, neque laborum itaque odit deleniti velit nobis optio obcaecati
// facere porro perspiciatis totam ducimus minus voluptatum aperiam eos
// dolores ullam delectus? Explicabo temporibus hic illum provident, rerum
// minima sequi accusantium aut id sit nostrum quod vitae debitis
// repellendus minus dolore alias distinctio dicta. Harum rem vel,
// reiciendis ex aperiam consectetur quis quo totam maxime placeat nisi
// voluptatem beatae sunt. Et fugit nam maxime aut nisi deleniti animi
// assumenda corrupti excepturi dolor voluptatem, quas blanditiis,
// voluptatibus earum non laboriosam! Facilis nesciunt tempora iste quos
// rerum qui eveniet consequuntur perferendis unde ducimus accusamus
// dolorem velit nulla possimus, commodi ullam odio dignissimos culpa
// beatae laborum deleniti, mollitia provident soluta. Numquam odio sed
// nesciunt similique nobis, dolorum quos maxime ut doloribus facilis
// quidem laudantium possimus omnis culpa sit, ea ullam sunt. Quod facere
// possimus perferendis, sit quidem magnam deleniti ipsum reiciendis
// distinctio repellat quam quos quaerat voluptas consectetur, enim in
// pariatur officia suscipit rerum. Nam minus delectus praesentium
// mollitia, incidunt nihil natus odit earum pariatur suscipit blanditiis
// obcaecati inventore ad quis in laudantium. Vitae, voluptate odio
// possimus repellendus fugiat quas eos velit reprehenderit beatae aperiam
// voluptatem neque incidunt, numquam fuga magnam magni doloribus officiis,
// dolorum est provident? Asperiores nemo voluptate in voluptatem ut id,
// dolorem nulla pariatur! Aliquam deserunt, asperiores molestias,
// cupiditate nulla delectus voluptas quod error nam repudiandae fuga eum
// id assumenda ipsum illo vero, voluptatum tenetur fugit. Saepe voluptas
// eos quibusdam quod praesentium alias totam, odit, eligendi ratione
// consectetur nisi error nulla. Voluptatibus, tempora ipsum sunt quam
// odio, iure id, aliquam expedita a dolor obcaecati molestiae unde
// mollitia rerum voluptatem totam sint at temporibus deleniti facilis
// impedit? Dignissimos enim nemo dolores at accusamus, cumque vero veniam
// non harum, eum, minus doloremque reiciendis nesciunt laboriosam! Libero
// cum reprehenderit provident mollitia recusandae, molestiae quas
// excepturi, voluptatum reiciendis autem, laborum est magnam. Quisquam
// iusto perspiciatis neque odit cum adipisci nisi dignissimos corrupti,
// eos pariatur, labore quia voluptatem laborum quasi commodi molestiae
// animi inventore corporis deserunt! Fuga quos accusantium deserunt
// necessitatibus dignissimos officia enim error, autem cumque alias
// nesciunt cum voluptate eligendi doloremque placeat ullam minima dicta
// reprehenderit? Ratione consequuntur sequi nobis ab quia. Amet ab
// excepturi eveniet in impedit alias laudantium et corporis, tenetur
// consequatur autem iusto ipsum recusandae eligendi mollitia nulla sequi
// dolorum deleniti, quibusdam ullam corrupti? Reprehenderit, nostrum.
// Libero quos eligendi quaerat quia reiciendis alias quam officia sunt,
// blanditiis veritatis rem laudantium mollitia aliquid accusamus ipsa
// temporibus quis tenetur labore quod. Quidem magni dolore odio tempore,
// quos quae. Impedit veritatis velit deleniti commodi unde error magnam
// accusamus, eaque, nemo nobis ducimus, alias omnis molestiae? Nostrum
// dolore quo excepturi vitae nulla, dolores in debitis ab impedit repellat
// necessitatibus explicabo mollitia corrupti itaque, ducimus minus!
// Laudantium dolores maiores fugit, sint nam magni odit veritatis? Iure
// harum quod et magnam. Enim id qui placeat et cum facere in tempore
// laboriosam dolor sunt iusto, commodi laborum totam molestias corporis
// consequatur tenetur, doloremque modi, debitis praesentium quisquam.
// Aperiam sequi dignissimos iusto distinctio delectus magni nesciunt,
// veritatis libero quasi perferendis saepe incidunt soluta? Cum adipisci
// dolorum dicta quas iure illo repellat tempore minus doloribus magnam
// delectus nihil saepe ea, vel inventore doloremque ipsum! Maiores labore
// sunt pariatur, rerum culpa earum odio molestiae consequuntur! Eius quia
// provident hic ipsam. Architecto aut aliquam, laborum fugiat consequuntur
// cumque ullam nihil eaque quis iusto deserunt harum amet debitis
// laboriosam veniam doloremque, voluptatum, iure quam quibusdam culpa
// quaerat. Error, ratione quasi nisi optio ad, dolorum perferendis quae
// saepe expedita nulla aperiam repellendus consequuntur veritatis libero?
// Veniam sapiente blanditiis quae iste, ipsam ipsa repudiandae odio omnis
// repellat fuga in asperiores dolorum, suscipit architecto exercitationem
// a! Provident ea maxime ipsa eveniet alias at doloremque! Explicabo
// repellendus repellat culpa distinctio quas voluptatibus quibusdam nisi
// eveniet error? Numquam delectus sunt nemo nam? Id reprehenderit
// quisquam, qui, tempora quod laboriosam porro veniam dolores magnam
// possimus minus atque ratione, quo explicabo rem beatae labore quaerat
// amet? Accusantium excepturi, vel cupiditate ea maiores quam suscipit
// reiciendis odio laboriosam eligendi nemo ullam asperiores recusandae
// sequi est fuga itaque distinctio quidem minus culpa adipisci nihil
// accusamus exercitationem? Optio dolorem rem laudantium voluptate,
// expedita iusto enim tempore asperiores dolore ipsam voluptatem quam
// distinctio magni adipisci veritatis nostrum laboriosam odit architecto
// praesentium! Placeat eligendi, nihil suscipit unde ducimus quaerat ipsum
// inventore sint eaque tenetur vero nesciunt repudiandae, in temporibus
// veniam doloribus corporis rem facilis commodi porro labore beatae quae
// amet repellat. Facere explicabo quia officiis, in aspernatur quam quae,
// cum dolores consequuntur officia labore ad numquam voluptatem molestiae
// perspiciatis ipsam porro commodi amet harum ullam nobis inventore fugit
// tempora laborum! Ipsam, temporibus voluptatibus modi illum sed totam
// tempore nam dolor. Placeat incidunt odit aspernatur saepe minima
// numquam, nulla similique obcaecati laborum maxime veritatis rerum, eius
// delectus, omnis voluptas vel fuga dignissimos dolore sed laboriosam
// expedita accusamus? Dolore odit eveniet consectetur, iusto ipsam impedit
// magnam blanditiis velit officiis tempora, corrupti sed. Nihil laudantium
// libero eveniet veritatis facilis assumenda, eos nostrum mollitia at
// recusandae optio placeat laborum quos odio ipsam soluta quis, similique
// quod voluptate commodi vel labore impedit vitae et! Itaque atque sit
// repellendus officia doloribus totam iste, illum quia tempora quos!
// Voluptatum est amet veniam officiis dolorum id molestias dolor, itaque
// vero officia et reiciendis, quisquam aut distinctio in ut facere impedit
// sunt quibusdam voluptas necessitatibus, eveniet delectus iure modi.
// Enim, explicabo. Debitis, veniam? Reprehenderit deleniti eveniet unde
// doloremque, harum sint eum voluptatem accusamus voluptate sit veniam
// inventore dolorum animi dolores corporis tempora voluptates alias. Nobis
// ducimus corrupti quaerat minus, fugit esse asperiores aperiam, suscipit
// repellat provident maiores ratione? Repellat, hic! At asperiores, in
// mollitia quidem maiores sit a ab accusantium, suscipit magni cumque
// distinctio. Deserunt similique eaque ipsa laboriosam commodi voluptatem
// aliquam nostrum non dignissimos deleniti labore libero alias ab,
// consequuntur at facilis, blanditiis exercitationem enim corrupti omnis
// impedit velit? Inventore tenetur sunt alias vel pariatur consectetur
// incidunt nulla eos ab! Ratione inventore officiis eos quaerat velit
// consequatur est, quibusdam consectetur temporibus tempora laudantium
// corrupti maiores quisquam! Nemo magnam beatae provident nobis, veniam ut
// molestiae fugiat quam. Autem quia adipisci corrupti illum consequatur
// facere quo sapiente doloribus qui corporis veniam nisi consectetur enim
// architecto quaerat nesciunt, incidunt quasi dolorem excepturi, pariatur
// quis est praesentium modi? Ad, ex molestiae! Rerum earum quis unde totam
// deserunt ratione sequi maiores aut cum porro. A quas, nemo excepturi,
// soluta qui eveniet placeat animi velit eligendi, aperiam cupiditate
// totam repellendus ipsam. Beatae, modi nam? Ut porro asperiores sed
// eveniet quisquam esse ea reprehenderit dicta commodi, consequuntur
// ratione excepturi! Totam laboriosam accusantium illo hic. Quos
// blanditiis modi eos, optio ducimus id? Quidem, voluptas perferendis
// deleniti eos voluptatem possimus itaque est nulla mollitia error aperiam
// facilis, dolorem exercitationem, tenetur quos libero. Placeat animi
// porro, voluptas autem ipsa eaque labore aut veniam quibusdam adipisci
// voluptatum earum, nisi modi, tempore perferendis accusamus? Recusandae
// cupiditate eaque ex maxime voluptas cum culpa molestiae rem voluptatem
// consequuntur exercitationem repellendus eos autem veniam mollitia,
// cumque temporibus minima, corrupti magni, modi accusamus nam id
// laudantium? Natus aliquam rerum dolore sed, magni quo quidem
// exercitationem ab aut repudiandae cum, distinctio recusandae odit ipsam
// accusamus vitae ullam, aperiam consequatur. Nobis alias deleniti
// recusandae magni sed, sapiente ducimus incidunt quo esse molestiae
// praesentium quidem enim. Quaerat, delectus facilis nam facere ipsum */}
// quibusdam!
