import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-your-credit-score-header.html';
import body from '@/components/exact/en-sa-your-credit-score-body.html';
import footer from '@/components/exact/en-sa-your-credit-score-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"686cf12852323316479907d2","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
