import React, { FunctionComponent } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Article from '../../types/article';

type Props = {
  title: string,
  shortcontent?: string,
  thumbnail?: string,
  categories?: string[]
}

const ArticleCard = ( {title} : Props ) => {

  const header = (
    <img alt="Card" src="https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
  );
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
    </span>
  );

  return (
    <div>
      <Card title={title} subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
        <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
      </Card>
    </div>
  )
};

export default ArticleCard;