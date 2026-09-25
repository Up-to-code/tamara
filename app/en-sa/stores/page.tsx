import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-header.html';
import body from '@/components/exact/en-sa-stores-body.html';
import footer from '@/components/exact/en-sa-stores-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6880f869ae1b6ceb346d4ae1","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
