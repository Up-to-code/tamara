import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-secures-saudi-central-bank-finance-license-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-secures-saudi-central-bank-finance-license-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-secures-saudi-central-bank-finance-license-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-secures-saudi-central-bank-finance-license.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
