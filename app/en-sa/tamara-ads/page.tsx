import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-tamara-ads-header.html';
import body from '@/components/exact/en-sa-tamara-ads-body.html';
import footer from '@/components/exact/en-sa-tamara-ads-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6853d9b8aea41877eb5cc6ec","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
