import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-life-at-tamara-header.html';
import body from '@/components/exact/en-sa-life-at-tamara-body.html';
import footer from '@/components/exact/en-sa-life-at-tamara-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"694d234f71a3072539370fcc","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
