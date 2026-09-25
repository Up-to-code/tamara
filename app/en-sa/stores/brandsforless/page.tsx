import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-brandsforless-header.html';
import body from '@/components/exact/en-sa-stores-brandsforless-body.html';
import footer from '@/components/exact/en-sa-stores-brandsforless-footer.html';
import inline from '@/components/exact/en-sa-stores-brandsforless.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
