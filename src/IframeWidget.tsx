import * as React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';
import { useEffect, useState } from 'react';
import '../style/IframeWidget.css';

type IframeWidgetProps = {
  initialUrl: string;
};

const IframeWidgetComponent = ({ initialUrl }: IframeWidgetProps) => {
  const [url, setUrl] = useState<string>(initialUrl);
  console.log(url);
  const handleClick = () => {
    setUrl('');
  };

  useEffect(() => {
    setUrl(initialUrl);
  }, [url]);

  return (
    <div className="iframe-widget" style={{ height: '100%', width: '100%' }}>
      <div style={{ marginBottom: '10px' }}>
        <button className="button" onClick={handleClick}>
          Home
        </button>
      </div>
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Iframe URL"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

class IframeWidget extends ReactWidget {
  private readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  render() {
    return <IframeWidgetComponent initialUrl={this.url} />;
  }
}

export default IframeWidget;
