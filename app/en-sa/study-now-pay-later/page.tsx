import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-study-now-pay-later-header.html';
import body from '@/components/exact/en-sa-study-now-pay-later-body.html';
import footer from '@/components/exact/en-sa-study-now-pay-later-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68960a27a1ae8f004f9673df","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
