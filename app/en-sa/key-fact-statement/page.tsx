import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-key-fact-statement-header.html';
import body from '@/components/exact/en-sa-key-fact-statement-body.html';
import footer from '@/components/exact/en-sa-key-fact-statement-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"67c539481c49f30fb0233183","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
